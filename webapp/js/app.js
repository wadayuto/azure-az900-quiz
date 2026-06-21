// AZ-900 過去問道場アプリ — メインロジック

const CHAPTERS = [
  { id: 1, name: "クラウドの概念" },
  { id: 2, name: "Azureの基礎・コスト管理" },
  { id: 3, name: "Azureの管理ツール・ガバナンス基礎" },
  { id: 4, name: "コンピューティングサービス" },
  { id: 5, name: "ネットワークサービス" },
  { id: 6, name: "ストレージサービス" },
  { id: 7, name: "ID・アクセス・セキュリティ" },
  { id: 8, name: "ガバナンス・コンプライアンス・監視" },
  { id: 0, name: "その他" },
];

const ALL = window.QUESTIONS || [];

// ===== グローバル状態 =====
const State = {
  screen: "home",
  // クイズセッション
  queue: [], // 出題する問題の配列
  idx: 0,
  answers: {}, // { qid: {selected, isCorrect} }
  startTime: 0,
  instantMode: true, // 即時採点
  // ホーム設定
  selectedChapter: "all",
  count: 20,
  mode: "shuffle", // order | shuffle | weak
};

// ===== ユーティリティ =====
function $(sel, root = document) {
  return root.querySelector(sel);
}
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function esc(s) {
  return (s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
// 問題文・解説の改行とコマンド行を整形
function formatText(s) {
  const lines = esc(s).split("\n");
  return lines
    .map((ln) => {
      // コマンド/コードっぽい行（az, Set-, New-, --option, {} 等）は等幅
      if (/^(az |Set-|New-|Get-|Remove-|Connect-|Add-|\$|\{|\}|--)/.test(ln.trim())) {
        return `<code class="cmd">${ln}</code>`;
      }
      return ln;
    })
    .join("<br>");
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function questionsByChapter(ch) {
  if (ch === "all") return ALL;
  if (ch === "flagged") return ALL.filter((q) => Storage.isFlagged(q.id));
  return ALL.filter((q) => q.chapter === ch);
}

// 苦手スコア（高いほど優先）
function weakScore(q) {
  const s = Storage.getStat(q.id);
  if (s.attempts === 0) return 5; // 未挑戦は中程度に優先
  const acc = s.correct / s.attempts;
  let score = (1 - acc) * 10; // 不正解率
  score -= Math.min(s.streak, 5) * 1.2; // 連続正解で下げる
  if (s.lastAnswered) {
    const days = (Date.now() - s.lastAnswered) / 86400000;
    score += Math.min(days, 30) * 0.15; // 久しぶりは上げる
  }
  return score;
}

function buildQueue() {
  let pool = questionsByChapter(State.selectedChapter).slice();
  if (State.mode === "order") {
    pool.sort((a, b) => a.number - b.number);
  } else if (State.mode === "shuffle") {
    pool = shuffle(pool);
  } else if (State.mode === "weak") {
    pool.sort((a, b) => weakScore(b) - weakScore(a));
  }
  const n = State.count === "all" ? pool.length : Math.min(State.count, pool.length);
  return pool.slice(0, n);
}

// ===== 採点 =====
function judge(q, selected) {
  if (q.type === "choice") {
    const sel = [...selected].sort();
    const cor = [...q.correctAnswers].sort();
    return sel.length === cor.length && sel.every((v, i) => v === cor[i]);
  } else {
    // truefalse: selected は配列 [はい/いいえ,...]
    if (!selected || selected.length !== q.tfAnswers.length) return false;
    return q.tfAnswers.every((a, i) => a === selected[i]);
  }
}

// ===== 画面遷移 =====
function go(screen) {
  State.screen = screen;
  render();
  window.scrollTo(0, 0);
  closeSidebar();
}

function startQuiz() {
  State.queue = buildQueue();
  if (State.queue.length === 0) {
    alert("対象の問題がありません。カテゴリや条件を変更してください。");
    return;
  }
  State.idx = 0;
  State.answers = {};
  State.startTime = Date.now();
  go("quiz");
}

// ===== レンダリング =====
const app = () => $("#app");

function render() {
  const root = app();
  root.innerHTML = "";
  setActiveNav();
  switch (State.screen) {
    case "home": return renderHome(root);
    case "quiz": return renderQuiz(root);
    case "result": return renderResult(root);
    case "list": return renderList(root);
    case "services": return renderServices(root);
    case "mypage": return renderMypage(root);
  }
}

// ---- ホーム ----
function renderHome(root) {
  root.innerHTML = "";
  const prog = Storage.getProgress();
  const totalAns = Object.values(prog).reduce((s, v) => s + v.attempts, 0);
  const totalCor = Object.values(prog).reduce((s, v) => s + v.correct, 0);
  const acc = totalAns ? Math.round((totalCor / totalAns) * 100) : 0;
  const studied = Object.keys(prog).length;

  const wrap = el("div", "container");
  wrap.appendChild(el("div", "page-head", `<h1>AZ-900 過去問道場</h1><p class="sub">Microsoft Azure Fundamentals 全${ALL.length}問</p>`));

  // サマリー
  const sum = el("div", "summary-grid");
  sum.innerHTML = `
    <div class="stat-card"><div class="stat-num">${studied}/${ALL.length}</div><div class="stat-lbl">挑戦済み</div></div>
    <div class="stat-card"><div class="stat-num">${totalAns}</div><div class="stat-lbl">総回答数</div></div>
    <div class="stat-card"><div class="stat-num">${acc}<span class="pct">%</span></div><div class="stat-lbl">正答率</div></div>`;
  wrap.appendChild(sum);

  // 設定
  const settings = el("div", "card");
  settings.innerHTML = `<h2>出題設定</h2>`;

  // カテゴリ選択
  const catWrap = el("div", "field");
  catWrap.appendChild(el("label", "field-label", "カテゴリ"));
  const cats = el("div", "chip-row");
  const flaggedCount = ALL.filter((q) => Storage.isFlagged(q.id)).length;
  const catItems = [{ id: "all", name: `全問 (${ALL.length})` }];
  CHAPTERS.forEach((c) => {
    const n = ALL.filter((q) => q.chapter === c.id).length;
    if (n > 0) catItems.push({ id: c.id, name: `${c.name} (${n})` });
  });
  catItems.push({ id: "flagged", name: `★見直し (${flaggedCount})` });
  catItems.forEach((c) => {
    const chip = el("button", "chip" + (State.selectedChapter === c.id ? " active" : ""), esc(c.name));
    chip.onclick = () => { State.selectedChapter = c.id; renderHome(root); };
    cats.appendChild(chip);
  });
  catWrap.appendChild(cats);
  settings.appendChild(catWrap);

  // 問題数
  const cntWrap = el("div", "field");
  cntWrap.appendChild(el("label", "field-label", "問題数"));
  const cnts = el("div", "chip-row");
  [10, 20, 35, 50, "all"].forEach((n) => {
    const lbl = n === "all" ? "全部" : n === 35 ? "35問(本番)" : `${n}問`;
    const chip = el("button", "chip" + (State.count === n ? " active" : ""), lbl);
    chip.onclick = () => { State.count = n; renderHome(root); };
    cnts.appendChild(chip);
  });
  cntWrap.appendChild(cnts);
  if (State.count === 35) {
    cntWrap.appendChild(el("p", "field-hint", "本番想定モード：はい/いいえ問題は1文ずつを1問として採点。実際のAZ-900に合わせ、1000点満点・700点で合格判定します。"));
  }
  settings.appendChild(cntWrap);

  // 出題順
  const modeWrap = el("div", "field");
  modeWrap.appendChild(el("label", "field-label", "出題順"));
  const modes = el("div", "chip-row");
  [
    { id: "shuffle", name: "シャッフル" },
    { id: "order", name: "番号順" },
    { id: "weak", name: "苦手優先" },
  ].forEach((m) => {
    const chip = el("button", "chip" + (State.mode === m.id ? " active" : ""), m.name);
    chip.onclick = () => { State.mode = m.id; renderHome(root); };
    modes.appendChild(chip);
  });
  modeWrap.appendChild(modes);
  settings.appendChild(modeWrap);

  // 即時採点
  const instWrap = el("div", "field row");
  const tgl = el("label", "switch");
  tgl.innerHTML = `<input type="checkbox" ${State.instantMode ? "checked" : ""}><span class="slider"></span>`;
  tgl.querySelector("input").onchange = (e) => { State.instantMode = e.target.checked; };
  instWrap.appendChild(el("span", "field-label", "1問ごとに採点・解説を表示"));
  instWrap.appendChild(tgl);
  settings.appendChild(instWrap);

  const startBtn = el("button", "btn btn-primary btn-lg", "スタート");
  startBtn.onclick = startQuiz;
  settings.appendChild(startBtn);

  wrap.appendChild(settings);
  root.appendChild(wrap);
}

// ---- クイズ ----
function renderQuiz(root) {
  root.innerHTML = "";
  const q = State.queue[State.idx];
  const total = State.queue.length;
  const ans = State.answers[q.id];
  const answered = !!ans;

  const wrap = el("div", "container");

  // 進捗バー
  const bar = el("div", "quiz-top");
  bar.innerHTML = `
    <div class="progress"><div class="progress-fill" style="width:${(State.idx / total) * 100}%"></div></div>
    <div class="quiz-meta">
      <span class="q-count">${State.idx + 1} / ${total}</span>
      <span class="q-tag">${esc(q.chapterName)}・問題${q.number}</span>
    </div>`;
  wrap.appendChild(bar);

  const card = el("div", "card quiz-card");

  // 見直しフラグ
  const flagBtn = el("button", "flag-btn" + (Storage.isFlagged(q.id) ? " on" : ""), Storage.isFlagged(q.id) ? "★ 見直し中" : "☆ 後で見直す");
  flagBtn.onclick = () => {
    Storage.toggleFlag(q.id);
    renderQuiz(root);
  };
  card.appendChild(flagBtn);

  // 問題文
  card.appendChild(el("div", "q-text", formatText(q.text)));

  // 選択肢
  const selKey = `__sel_${q.id}`;
  if (!State[selKey]) State[selKey] = q.type === "truefalse" ? new Array(q.statements.length).fill(null) : [];
  const cur = State[selKey];

  if (q.type === "choice") {
    const multi = q.correctAnswers.length > 1;
    if (multi) card.appendChild(el("div", "hint", `${q.correctAnswers.length}つ選択してください`));
    const opts = el("div", "choices");
    q.choices.forEach((c) => {
      const chosen = cur.includes(c.key);
      let cls = "choice-item";
      if (answered) {
        const isCorrect = q.correctAnswers.includes(c.key);
        if (isCorrect) cls += " correct";
        else if (chosen) cls += " wrong";
      } else if (chosen) cls += " selected";
      const item = el("button", cls);
      item.innerHTML = `<span class="choice-key">${c.key}</span><span class="choice-text">${formatText(c.text)}</span>`;
      if (!answered) {
        item.onclick = () => {
          if (multi) {
            const i = cur.indexOf(c.key);
            if (i >= 0) cur.splice(i, 1); else cur.push(c.key);
          } else {
            State[selKey] = [c.key];
          }
          renderQuiz(root);
        };
      }
      opts.appendChild(item);
    });
    card.appendChild(opts);
  } else {
    // truefalse
    const stWrap = el("div", "statements");
    q.statements.forEach((st, i) => {
      const row = el("div", "stmt-row");
      row.appendChild(el("div", "stmt-text", `<span class="stmt-no">${i + 1}</span>${formatText(st)}`));
      const btns = el("div", "tf-btns");
      ["はい", "いいえ"].forEach((v) => {
        let cls = "tf-btn";
        if (answered) {
          if (q.tfAnswers[i] === v) cls += " correct";
          else if (cur[i] === v) cls += " wrong";
        } else if (cur[i] === v) cls += " selected";
        const b = el("button", cls, v);
        if (!answered) {
          b.onclick = () => { cur[i] = v; renderQuiz(root); };
        }
        btns.appendChild(b);
      });
      row.appendChild(btns);
      stWrap.appendChild(row);
    });
    card.appendChild(stWrap);
  }

  // アクションボタン
  const actions = el("div", "quiz-actions");
  if (!answered) {
    const submit = el("button", "btn btn-primary", "回答する");
    submit.onclick = () => {
      const ok = q.type === "choice" ? cur.length > 0 : cur.every((x) => x !== null);
      if (!ok) { alert("回答を選択してください。"); return; }
      const correct = judge(q, cur);
      State.answers[q.id] = { selected: cur.slice(), isCorrect: correct };
      Storage.recordAnswer(q.id, correct);
      if (State.instantMode) renderQuiz(root);
      else next();
    };
    actions.appendChild(submit);
  } else {
    if (State.instantMode) {
      // 採点結果＋解説
      const verdict = el("div", "verdict " + (ans.isCorrect ? "ok" : "ng"), ans.isCorrect ? "正解" : "不正解");
      card.insertBefore(verdict, card.querySelector(".quiz-actions"));
      const exp = el("div", "explanation");
      let ansLabel = q.type === "choice" ? q.correctAnswers.join("、") : q.tfAnswers.map((a, i) => `${i + 1}.${a}`).join(" ");
      exp.innerHTML = `<div class="exp-answer">正解：${esc(ansLabel)}</div>` +
        (q.review ? `<div class="exp-review">復習：${esc(q.review)}</div>` : "") +
        `<div class="exp-body">${formatText(q.explanation)}</div>`;
      card.appendChild(exp);
      attachServiceLinks(exp, q);
    }
    const nextBtn = el("button", "btn btn-primary", State.idx + 1 < total ? "次の問題へ" : "結果を見る");
    nextBtn.onclick = next;
    actions.appendChild(nextBtn);
  }
  // 中断
  const quit = el("button", "btn btn-ghost", "中断してホームへ");
  quit.onclick = () => { if (confirm("セッションを中断してホームに戻りますか？")) go("home"); };
  actions.appendChild(quit);

  card.appendChild(actions);
  wrap.appendChild(card);
  root.appendChild(wrap);
}

function next() {
  if (State.idx + 1 < State.queue.length) {
    State.idx += 1;
    render();
    window.scrollTo(0, 0);
  } else {
    go("result");
  }
}

// 回答単位の採点（はい/いいえ問題は文ごとに1問として数える）
function answerUnitStats(queue, answers) {
  let total = 0, got = 0;
  queue.forEach((q) => {
    const a = answers[q.id];
    if (q.type === "truefalse") {
      total += q.statements.length;
      if (a && Array.isArray(a.selected)) {
        q.tfAnswers.forEach((ans, i) => { if (a.selected[i] === ans) got++; });
      }
    } else {
      total += 1;
      if (a?.isCorrect) got++;
    }
  });
  return { total, got };
}

// ---- 結果 ----
function renderResult(root) {
  const examMode = State.count === 35; // 本番想定＝回答単位で採点
  const qTotal = State.queue.length;
  const qCorrect = State.queue.filter((q) => State.answers[q.id]?.isCorrect).length;
  let total, correct;
  if (examMode) {
    const s = answerUnitStats(State.queue, State.answers);
    total = s.total; correct = s.got;
  } else {
    total = qTotal; correct = qCorrect;
  }
  const acc = total ? Math.round((correct / total) * 100) : 0;
  const sec = Math.round((Date.now() - State.startTime) / 1000);
  const mm = Math.floor(sec / 60), ss = sec % 60;

  const wrap = el("div", "container");
  wrap.appendChild(el("div", "page-head", `<h1>結果</h1>`));

  const score = el("div", "card result-score");
  if (examMode) {
    // 実際のAZ-900に合わせて1000点満点・700点合格で表示
    const scaled = Math.round((total ? correct / total : 0) * 1000);
    const passed = scaled >= 700;
    score.innerHTML = `
      <div class="big-score ${passed ? "great" : "bad"}">${scaled}<span class="pct"> / 1000</span></div>
      <div class="pass-badge ${passed ? "pass" : "fail"}">${passed ? "合格（700点以上）" : "不合格（700点未満）"}</div>
      <div class="score-detail">合格ライン 700点 ・ 正答率 ${acc}%</div>
      <div class="score-detail">${correct} / ${total} 問正解（回答単位）・ 所要 ${mm}分${ss}秒</div>
      <div class="score-note">全${qTotal}問中 ${qCorrect}問を完答</div>
      <div class="score-fine">※ AZ-900 は 1〜1000 点で採点され 700 点で合格します。素点から 1000 点への正確な換算式は非公開のため、正答率を 1000 点換算した目安です。</div>`;
  } else {
    const cls = acc >= 80 ? "great" : acc >= 60 ? "good" : "bad";
    score.innerHTML = `
      <div class="big-score ${cls}">${acc}<span class="pct">%</span></div>
      <div class="score-detail">${correct} / ${total} 問正解 ・ 所要 ${mm}分${ss}秒</div>`;
  }
  wrap.appendChild(score);

  const actions = el("div", "result-actions");
  const wrongQs = State.queue.filter((q) => !State.answers[q.id]?.isCorrect);
  if (wrongQs.length) {
    const rev = el("button", "btn btn-primary", `間違えた${wrongQs.length}問を復習`);
    rev.onclick = () => {
      State.queue = wrongQs;
      State.idx = 0;
      State.answers = {};
      wrongQs.forEach((q) => delete State[`__sel_${q.id}`]);
      State.startTime = Date.now();
      go("quiz");
    };
    actions.appendChild(rev);
  }
  const again = el("button", "btn btn-ghost", "ホームに戻る");
  again.onclick = () => go("home");
  actions.appendChild(again);
  wrap.appendChild(actions);

  // 一覧
  const listCard = el("div", "card");
  listCard.appendChild(el("h2", null, "回答一覧"));
  State.queue.forEach((q, i) => {
    const a = State.answers[q.id];
    const ok = a?.isCorrect;
    const row = el("button", "result-row");
    row.innerHTML = `<span class="rmark ${ok ? "ok" : "ng"}">${ok ? "○" : "×"}</span>
      <span class="rnum">問${q.number}</span>
      <span class="rtext">${esc(q.text.slice(0, 48))}…</span>`;
    row.onclick = () => openDetail(q);
    listCard.appendChild(row);
  });
  wrap.appendChild(listCard);
  root.appendChild(wrap);
}

// ---- 問題一覧 ----
function renderList(root) {
  const wrap = el("div", "container");
  wrap.appendChild(el("div", "page-head", `<h1>問題一覧</h1><p class="sub">カテゴリ別に全${ALL.length}問を閲覧できます</p>`));

  const cats = [{ id: "all", name: "全問", list: ALL }];
  CHAPTERS.forEach((c) => {
    const list = ALL.filter((q) => q.chapter === c.id);
    if (list.length) cats.push({ id: c.id, name: c.name, list });
  });

  CHAPTERS.forEach((c) => {
    const list = ALL.filter((q) => q.chapter === c.id);
    if (!list.length) return;
    const sec = el("div", "card");
    const head = el("button", "accordion-head", `${esc(c.name)} <span class="acc-count">${list.length}問</span>`);
    const body = el("div", "accordion-body hidden");
    head.onclick = () => body.classList.toggle("hidden");
    list.forEach((q) => {
      const s = Storage.getStat(q.id);
      const accTag = s.attempts ? `<span class="mini-acc ${s.correct / s.attempts >= 0.6 ? "g" : "b"}">${Math.round((s.correct / s.attempts) * 100)}%</span>` : "";
      const row = el("button", "list-row");
      row.innerHTML = `<span class="rnum">問${q.number}</span><span class="rtext">${esc(q.text.slice(0, 50))}…</span>${accTag}`;
      row.onclick = () => openDetail(q);
      body.appendChild(row);
    });
    sec.appendChild(head);
    sec.appendChild(body);
    wrap.appendChild(sec);
  });
  root.appendChild(wrap);
}

// 詳細モーダル
function openDetail(q) {
  const overlay = el("div", "modal-overlay");
  const modal = el("div", "modal");
  let ansLabel = q.type === "choice" ? q.correctAnswers.join("、") : q.tfAnswers.map((a, i) => `${i + 1}.${a}`).join(" ");
  let choicesHtml = "";
  if (q.type === "choice") {
    choicesHtml = '<div class="choices">' + q.choices.map((c) => {
      const ok = q.correctAnswers.includes(c.key);
      return `<div class="choice-item ${ok ? "correct" : ""}"><span class="choice-key">${c.key}</span><span class="choice-text">${formatText(c.text)}</span></div>`;
    }).join("") + "</div>";
  } else {
    choicesHtml = '<div class="statements">' + q.statements.map((st, i) =>
      `<div class="stmt-row"><div class="stmt-text"><span class="stmt-no">${i + 1}</span>${formatText(st)}</div><div class="tf-btns"><span class="tf-btn correct">${q.tfAnswers[i]}</span></div></div>`
    ).join("") + "</div>";
  }
  modal.innerHTML = `
    <div class="modal-head"><span class="q-tag">${esc(q.chapterName)}・問題${q.number}</span><button class="modal-close">✕</button></div>
    <div class="q-text">${formatText(q.text)}</div>
    ${choicesHtml}
    <div class="explanation"><div class="exp-answer">正解：${esc(ansLabel)}</div>
    ${q.review ? `<div class="exp-review">復習：${esc(q.review)}</div>` : ""}
    <div class="exp-body">${formatText(q.explanation)}</div></div>`;
  overlay.appendChild(modal);
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  modal.querySelector(".modal-close").onclick = () => overlay.remove();
  document.body.appendChild(overlay);
  attachServiceLinks(modal.querySelector(".explanation"), q);
}

// ---- サービス一覧 ----
// カテゴリの開閉状態を保持（既定: すべて閉じる）
State.svcOpen = State.svcOpen || {};

function renderServices(root) {
  root.innerHTML = "";
  const cats = (window.SERVICE_CATEGORIES || []).filter(
    (c) => (window.SERVICES || []).some((s) => s.cat === c.id)
  );
  const services = window.SERVICES || [];

  const wrap = el("div", "container");
  const head = el("div", "page-head");
  head.innerHTML =
    `<h1>Azure サービス一覧</h1><p class="sub">主要サービス${services.length}個をカテゴリ別に。項目をタップで開閉、カードをタップで解説</p>`;
  wrap.appendChild(head);

  // すべて開く / 閉じる
  const allOpen = cats.every((c) => State.svcOpen[c.id]);
  const toggleAll = el("button", "svc-toggle-all", allOpen ? "すべて閉じる" : "すべて開く");
  toggleAll.onclick = () => {
    const next = !allOpen;
    cats.forEach((c) => { State.svcOpen[c.id] = next; });
    renderServices(root);
  };
  wrap.appendChild(toggleAll);

  cats.forEach((cat) => {
    const list = services.filter((s) => s.cat === cat.id);
    const isOpen = !!State.svcOpen[cat.id];
    const sec = el("div", "svc-section" + (isOpen ? " open" : ""));

    const headBtn = el("button", "svc-cat-head");
    headBtn.style.setProperty("--accent", cat.color);
    headBtn.innerHTML =
      `<span class="svc-dot" style="background:${cat.color}"></span>
       <span class="svc-cat-name">${esc(cat.name)}</span>
       <span class="svc-cat-count">${list.length}</span>
       <span class="svc-chevron">›</span>`;
    headBtn.onclick = () => {
      State.svcOpen[cat.id] = !State.svcOpen[cat.id];
      renderServices(root);
    };
    sec.appendChild(headBtn);

    if (isOpen) {
      const grid = el("div", "svc-grid svc-grid-in");
      list.forEach((s) => {
        const card = el("button", "svc-card");
        card.style.setProperty("--accent", cat.color);
        card.innerHTML =
          `<div class="svc-name">${esc(s.name)}${s.read ? `<span class="svc-read">${esc(s.read)}</span>` : ""}</div>
           <div class="svc-short">${esc(s.short)}</div>
           <span class="svc-more">タップで詳しく ›</span>`;
        card.onclick = () => openServiceModal(s, cat);
        grid.appendChild(card);
      });
      sec.appendChild(grid);
    }
    wrap.appendChild(sec);
  });
  root.appendChild(wrap);
}

function openServiceModal(s, cat) {
  // cat 省略時は SERVICES の cat から自動で引く（解説からの呼び出し用）
  cat = cat || catOf(s);
  const overlay = el("div", "modal-overlay svc-overlay");
  const modal = el("div", "modal svc-modal pop");
  modal.style.setProperty("--accent", cat.color);
  // 画像スロット（images があれば表示。空 or 無しなら何も出さない）
  const imgs = Array.isArray(s.images) ? s.images.filter((im) => im && im.src) : [];
  const mediaHtml = imgs.length
    ? `<div class="svc-modal-media">` +
      imgs.map((im) =>
        `<figure class="svc-fig"><img src="${esc(im.src)}" alt="${esc(im.caption || s.name)}" loading="lazy">` +
        (im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : "") +
        `</figure>`
      ).join("") +
      `</div>`
    : "";
  modal.innerHTML = `
    <div class="modal-head">
      <span class="svc-modal-cat" style="color:${cat.color}"><span class="svc-dot" style="background:${cat.color}"></span>${esc(cat.name)}</span>
      <button class="modal-close">✕</button>
    </div>
    <div class="svc-modal-name">${esc(s.name)}${s.read ? `<span class="svc-read">${esc(s.read)}</span>` : ""}</div>
    <div class="svc-modal-short">${esc(s.short)}</div>
    ${mediaHtml}
    <div class="svc-modal-desc">${esc(s.desc)}</div>`;
  overlay.appendChild(modal);
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(overlay, modal); };
  modal.querySelector(".modal-close").onclick = () => closeModal(overlay, modal);
  document.body.appendChild(overlay);
}

// ===== サービス用語の検出・リンク化（一覧と同じポップアップを解説でも使う） =====
function catOf(s) {
  return (
    (window.SERVICE_CATEGORIES || []).find((c) => c.id === s.cat) || {
      name: "", color: "var(--primary)",
    }
  );
}

// 検出インデックス（名前・読み・別名 → サービス）。長い語を優先してマッチ。
function serviceIndex() {
  if (window.__svcIndex) return window.__svcIndex;
  const cats = {};
  (window.SERVICE_CATEGORIES || []).forEach((c) => (cats[c.id] = c));
  const entries = [];
  (window.SERVICES || []).forEach((s) => {
    const terms = new Set([s.name]);
    if (s.read) terms.add(s.read);
    (s.aliases || []).forEach((a) => terms.add(a));
    terms.forEach((t) => {
      if (t && t.length >= 2) entries.push({ term: t, svc: s, cat: cats[s.cat] });
    });
  });
  entries.sort((a, b) => b.term.length - a.term.length);
  window.__svcIndex = entries;
  return entries;
}

// テキスト中に登場するサービスを返す（重複排除）
function findServicesInText(text) {
  const found = [];
  const seen = new Set();
  serviceIndex().forEach(({ term, svc, cat }) => {
    if (seen.has(svc.name)) return;
    if (text.indexOf(term) >= 0) { found.push({ svc, cat }); seen.add(svc.name); }
  });
  return found;
}

// 解説の下に「関連サービス」チップを並べる
function relatedServiceChips(text) {
  const found = findServicesInText(text);
  if (!found.length) return null;
  const box = el("div", "rel-svc");
  box.appendChild(el("div", "rel-svc-label", "関連サービス（タップで解説）"));
  const row = el("div", "rel-svc-chips");
  found.forEach(({ svc, cat }) => {
    const chip = el("button", "rel-svc-chip");
    chip.style.setProperty("--accent", cat.color);
    chip.innerHTML = `<span class="svc-dot" style="background:${cat.color}"></span>${esc(svc.name)}`;
    chip.onclick = () => openServiceModal(svc, cat);
    row.appendChild(chip);
  });
  box.appendChild(row);
  return box;
}

// 本文中のサービス名（各サービス最初の1回）をクリック可能リンクに変換
function linkifyServices(container) {
  if (!container) return;
  const entries = serviceIndex();
  if (!entries.length) return;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) {
    if (n.parentElement && n.parentElement.closest("code, .svc-link")) continue;
    nodes.push(n);
  }
  const linked = new Set(); // 同じサービスは最初の1回だけ
  nodes.forEach((node) => {
    const text = node.nodeValue;
    const matches = [];
    entries.forEach(({ term, svc, cat }) => {
      if (linked.has(svc.name)) return;
      const i = text.indexOf(term);
      if (i >= 0) matches.push({ i, len: term.length, svc, cat });
    });
    if (!matches.length) return;
    matches.sort((a, b) => a.i - b.i || b.len - a.len);
    // 重なりを除いて採用
    const chosen = [];
    let cursor = -1;
    matches.forEach((m) => {
      if (m.i > cursor && !linked.has(m.svc.name)) {
        chosen.push(m);
        linked.add(m.svc.name);
        cursor = m.i + m.len - 1;
      }
    });
    if (!chosen.length) return;
    chosen.sort((a, b) => a.i - b.i);
    const frag = document.createDocumentFragment();
    let pos = 0;
    chosen.forEach((m) => {
      if (m.i > pos) frag.appendChild(document.createTextNode(text.slice(pos, m.i)));
      const span = el("span", "svc-link");
      span.textContent = text.slice(m.i, m.i + m.len);
      span.style.setProperty("--accent", m.cat.color);
      span.onclick = (e) => { e.stopPropagation(); openServiceModal(m.svc, m.cat); };
      frag.appendChild(span);
      pos = m.i + m.len;
    });
    if (pos < text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
    node.parentNode.replaceChild(frag, node);
  });
}

// 解説要素にサービス連携（本文リンク化＋関連チップ）を適用
function attachServiceLinks(expEl, q) {
  if (!expEl) return;
  // 補足解説（管理しやすいよう解説本文とは別枠で表示）
  if (q.supplement) {
    const sup = el("div", "exp-supplement");
    sup.innerHTML = `<div class="sup-label">📘 もっとやさしく</div><div class="sup-body">${formatText(q.supplement)}</div>`;
    linkifyServices(sup.querySelector(".sup-body"));
    expEl.appendChild(sup);
  }
  // 図解（diagrams.js の id を参照。複数問で使い回し）
  if (q.diagram && window.DIAGRAMS && window.DIAGRAMS[q.diagram]) {
    const d = window.DIAGRAMS[q.diagram];
    const fig = el("figure", "exp-figure");
    fig.innerHTML = `<div class="fig-wrap">${d.svg}</div>` + (d.title ? `<figcaption>${esc(d.title)}</figcaption>` : "");
    expEl.appendChild(fig);
  }
  linkifyServices(expEl.querySelector(".exp-body"));
  const chips = relatedServiceChips(`${q.text}\n${q.explanation || ""}\n${q.review || ""}`);
  if (chips) expEl.appendChild(chips);
}

function closeModal(overlay, modal) {
  modal.classList.add("pop-out");
  overlay.classList.add("fade-out");
  setTimeout(() => overlay.remove(), 160);
}

// ---- マイページ ----
function renderMypage(root) {
  const prog = Storage.getProgress();
  const log = Storage.getLog();
  const totalAns = Object.values(prog).reduce((s, v) => s + v.attempts, 0);
  const totalCor = Object.values(prog).reduce((s, v) => s + v.correct, 0);
  const acc = totalAns ? Math.round((totalCor / totalAns) * 100) : 0;
  const studied = Object.keys(prog).length;

  const wrap = el("div", "container");
  wrap.appendChild(el("div", "page-head", `<h1>マイページ</h1>`));

  const sum = el("div", "summary-grid");
  sum.innerHTML = `
    <div class="stat-card"><div class="stat-num">${studied}/${ALL.length}</div><div class="stat-lbl">挑戦済み問題</div></div>
    <div class="stat-card"><div class="stat-num">${totalAns}</div><div class="stat-lbl">総回答数</div></div>
    <div class="stat-card"><div class="stat-num">${acc}<span class="pct">%</span></div><div class="stat-lbl">通算正答率</div></div>`;
  wrap.appendChild(sum);

  // 章別正答率
  const chCard = el("div", "card");
  chCard.appendChild(el("h2", null, "カテゴリ別 正答率"));
  CHAPTERS.forEach((c) => {
    const list = ALL.filter((q) => q.chapter === c.id);
    if (!list.length) return;
    let a = 0, cor = 0;
    list.forEach((q) => { const s = Storage.getStat(q.id); a += s.attempts; cor += s.correct; });
    const pct = a ? Math.round((cor / a) * 100) : 0;
    const row = el("div", "ch-row");
    row.innerHTML = `<div class="ch-name">${esc(c.name)}</div>
      <div class="ch-bar"><div class="ch-fill" style="width:${pct}%"></div></div>
      <div class="ch-pct">${a ? pct + "%" : "—"}</div>`;
    chCard.appendChild(row);
  });
  wrap.appendChild(chCard);

  // 学習カレンダー（直近約3ヶ月）
  const calCard = el("div", "card");
  calCard.appendChild(el("h2", null, "学習カレンダー"));
  const byDay = {};
  log.forEach((e) => { byDay[e.d] = (byDay[e.d] || 0) + 1; });
  const cal = el("div", "calendar");
  const today = new Date();
  for (let i = 90; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const n = byDay[key] || 0;
    const lv = n === 0 ? 0 : n < 5 ? 1 : n < 15 ? 2 : n < 30 ? 3 : 4;
    const cell = el("div", `cal-cell lv${lv}`);
    cell.title = `${key}: ${n}問`;
    cal.appendChild(cell);
  }
  calCard.appendChild(cal);
  wrap.appendChild(calCard);

  // リセット
  const dangerCard = el("div", "card");
  const reset = el("button", "btn btn-danger", "学習データをリセット");
  reset.onclick = () => {
    if (confirm("すべての学習履歴・正答率・見直しフラグを削除します。よろしいですか？")) {
      Storage.resetAll();
      go("mypage");
    }
  };
  dangerCard.appendChild(reset);
  wrap.appendChild(dangerCard);
  root.appendChild(wrap);
}

// ===== ナビゲーション =====
function setActiveNav() {
  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.toggle("active", n.dataset.screen === State.screen || (State.screen === "quiz" && n.dataset.screen === "home") || (State.screen === "result" && n.dataset.screen === "home"));
  });
}
function openSidebar() { document.body.classList.add("sidebar-open"); }
function closeSidebar() { document.body.classList.remove("sidebar-open"); }

function initNav() {
  document.querySelectorAll(".nav-item").forEach((n) => {
    n.onclick = () => go(n.dataset.screen);
  });
  $("#hamburger").onclick = () => document.body.classList.toggle("sidebar-open");
  $("#backdrop").onclick = closeSidebar;
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  render();
});
