// AZ-900 図解ライブラリ（テーマ連動のインラインSVG）
// 1つの図を複数の問題から id で参照して使い回す（window.QUESTIONS の diagram フィールド）。
// 配色は style.css の CSS 変数（var(--primary) など）を参照するのでダーク/ライト両対応。
window.DIAGRAMS = {
  // クラウドサービスモデル（責任分担）
  "service-models": {
    title: "IaaS / PaaS / SaaS — 利用者とAzureの管理範囲",
    svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>
        .lyr{font-size:12px;fill:var(--text)} .col{font-size:14px;font-weight:700;fill:var(--text)}
        .u{fill:color-mix(in srgb,var(--accent) 28%,transparent);stroke:var(--accent)}
        .a{fill:color-mix(in srgb,var(--primary) 28%,transparent);stroke:var(--primary)}
        .lg{font-size:12px;fill:var(--text-dim)}
      </style>
      <text x="20" y="24" class="col">クラウドサービスモデル</text>
      ${["IaaS","PaaS","SaaS"].map((name,ci)=>{
        const x=30+ci*225;
        // who manages each of 5 layers (true=利用者)
        const u=[[1,1,1,0,0],[1,0,0,0,0],[0,0,0,0,0]][ci];
        const labels=["アプリ/データ","ランタイム","OS","仮想化","ハードウェア"];
        let rows=labels.map((lb,li)=>`<rect x="${x}" y="${70+li*52}" width="190" height="46" rx="7" class="${u[li]?'u':'a'}"/><text x="${x+95}" y="${70+li*52+28}" text-anchor="middle" class="lyr">${lb}</text>`).join("");
        return `<text x="${x+95}" y="56" text-anchor="middle" class="col">${name}</text>${rows}`;
      }).join("")}
      <rect x="30" y="346" width="16" height="16" rx="4" class="u"/><text x="52" y="359" class="lg">利用者が管理</text>
      <rect x="160" y="346" width="16" height="16" rx="4" class="a"/><text x="182" y="359" class="lg">Azureが管理</text>
      <text x="430" y="359" class="lg">右にいくほど自分で管理する範囲が減る</text>
    </svg>`,
  },

  // リージョンと可用性ゾーン
  "availability-zones": {
    title: "リージョンと可用性ゾーン（高可用性のしくみ）",
    svg: `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>
        .t{fill:var(--text)} .d{fill:var(--text-dim);font-size:12px}
        .region{fill:none;stroke:var(--primary);stroke-width:2;stroke-dasharray:6 4}
        .az{fill:color-mix(in srgb,var(--accent) 22%,transparent);stroke:var(--accent);stroke-width:2}
        .dc{fill:var(--surface-2);stroke:var(--border)}
      </style>
      <text x="20" y="26" font-size="14" font-weight="700" class="t">1つのリージョン（地域）の中に、独立した複数のゾーンがある</text>
      <rect x="30" y="50" width="640" height="210" rx="14" class="region"/>
      <text x="48" y="78" font-size="13" font-weight="700" fill="var(--primary)">East Japan リージョン</text>
      ${[0,1,2].map(i=>{const x=70+i*205;return `
        <rect x="${x}" y="98" width="170" height="135" rx="10" class="az"/>
        <text x="${x+85}" y="122" text-anchor="middle" font-size="13" font-weight="700" class="t">ゾーン ${i+1}</text>
        <rect x="${x+22}" y="138" width="126" height="34" rx="6" class="dc"/><text x="${x+85}" y="160" text-anchor="middle" class="d">データセンター</text>
        <rect x="${x+22}" y="184" width="126" height="34" rx="6" class="dc"/><text x="${x+85}" y="206" text-anchor="middle" class="d">独立した電源/冷却/NW</text>`;}).join("")}
      <text x="350" y="290" text-anchor="middle" class="d">あるゾーンが障害でも、別ゾーンで動かせる → 高可用性（ダウンしにくい）</text>
    </svg>`,
  },

  // スケーリング
  "scaling": {
    title: "垂直スケーリング と 水平スケーリング",
    svg: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text)} .d{fill:var(--text-dim);font-size:12px}
        .vm{fill:color-mix(in srgb,var(--primary) 25%,transparent);stroke:var(--primary);stroke-width:2}
        .big{fill:color-mix(in srgb,var(--accent) 25%,transparent);stroke:var(--accent);stroke-width:2}</style>
      <text x="20" y="26" font-size="14" font-weight="700" class="t">スケールアップ（垂直）と スケールアウト（水平）</text>
      <text x="30" y="64" font-size="13" font-weight="700" fill="var(--primary)">垂直スケーリング＝1台を強くする</text>
      <rect x="40" y="170" width="60" height="60" rx="8" class="vm"/><text x="70" y="205" text-anchor="middle" class="d">小</text>
      <text x="120" y="200" font-size="22" fill="var(--text-dim)">→</text>
      <rect x="155" y="120" width="110" height="110" rx="10" class="big"/><text x="210" y="180" text-anchor="middle" class="t" font-size="13">大（CPU/メモリ増）</text>
      <line x1="345" y1="55" x2="345" y2="245" stroke="var(--border)"/>
      <text x="375" y="64" font-size="13" font-weight="700" fill="var(--accent)">水平スケーリング＝台数を増やす</text>
      <rect x="385" y="170" width="60" height="60" rx="8" class="vm"/>
      <text x="460" y="205" font-size="22" fill="var(--text-dim)">→</text>
      ${[0,1,2].map(i=>`<rect x="${495+i*65}" y="170" width="56" height="60" rx="8" class="big"/>`).join("")}
      <text x="560" y="255" text-anchor="middle" class="d">同じVMを複数台に増やす</text>
    </svg>`,
  },

  // ストレージ冗長化
  "storage-redundancy": {
    title: "データの冗長化（LRS / ZRS / GRS）",
    svg: `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text)} .d{fill:var(--text-dim);font-size:11.5px}
        .box{fill:none;stroke:var(--border)} .copy{fill:var(--accent)}
        .reg{fill:none;stroke:var(--primary);stroke-dasharray:5 4}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">同じデータを何個・どこにコピーして守るか</text>
      <!-- LRS -->
      <text x="30" y="58" font-size="13" font-weight="700" class="t">LRS</text><text x="75" y="58" class="d">1つのデータセンターに3コピー</text>
      <rect x="30" y="68" width="190" height="70" rx="8" class="box"/>
      ${[0,1,2].map(i=>`<circle cx="${60+i*55}" cy="103" r="13" class="copy"/>`).join("")}
      <!-- ZRS -->
      <text x="260" y="58" font-size="13" font-weight="700" class="t">ZRS</text><text x="305" y="58" class="d">3つのゾーンに分けて3コピー</text>
      ${[0,1,2].map(i=>`<rect x="${260+i*65}" y="68" width="58" height="70" rx="8" class="box"/><circle cx="${289+i*65}" cy="103" r="13" class="copy"/>`).join("")}
      <!-- GRS -->
      <text x="30" y="178" font-size="13" font-weight="700" class="t">GRS</text><text x="75" y="178" class="d">別リージョンにもコピー（地域災害に強い）</text>
      <rect x="30" y="192" width="280" height="90" rx="10" class="reg"/><text x="44" y="212" class="d" fill="var(--primary)">メイン地域</text>
      ${[0,1,2].map(i=>`<circle cx="${70+i*55}" cy="250" r="13" class="copy"/>`).join("")}
      <text x="330" y="240" font-size="22" fill="var(--text-dim)">→</text>
      <rect x="370" y="192" width="280" height="90" rx="10" class="reg"/><text x="384" y="212" class="d" fill="var(--primary)">数百km離れた地域</text>
      ${[0,1,2].map(i=>`<circle cx="${410+i*55}" cy="250" r="13" class="copy"/>`).join("")}
    </svg>`,
  },

  // ストレージアクセス層
  "storage-tiers": {
    title: "Blobのアクセス層（ホット / クール / アーカイブ）",
    svg: `<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text)} .d{fill:var(--text-dim);font-size:12px} .n{fill:var(--text);font-size:13px;font-weight:700}</style>
      <text x="20" y="26" font-size="14" font-weight="700" class="t">使う頻度で保存料金と取り出しやすさが変わる</text>
      <rect x="40" y="60" width="180" height="120" rx="12" fill="color-mix(in srgb,#ff6b6b 25%,transparent)" stroke="#ff6b6b" stroke-width="2"/>
      <text x="130" y="92" text-anchor="middle" class="n">ホット</text><text x="130" y="120" text-anchor="middle" class="d">よく使うデータ</text><text x="130" y="142" text-anchor="middle" class="d">保存料：高 / 取出し：安・即時</text>
      <rect x="260" y="60" width="180" height="120" rx="12" fill="color-mix(in srgb,#4dabf7 25%,transparent)" stroke="#4dabf7" stroke-width="2"/>
      <text x="350" y="92" text-anchor="middle" class="n">クール</text><text x="350" y="120" text-anchor="middle" class="d">たまに使うデータ</text><text x="350" y="142" text-anchor="middle" class="d">保存料：中 / 取出し：中</text>
      <rect x="480" y="60" width="180" height="120" rx="12" fill="color-mix(in srgb,var(--text-dim) 22%,transparent)" stroke="var(--text-dim)" stroke-width="2"/>
      <text x="570" y="92" text-anchor="middle" class="n">アーカイブ</text><text x="570" y="120" text-anchor="middle" class="d">滅多に使わない保管</text><text x="570" y="142" text-anchor="middle" class="d">保存料：最安 / 取出し：遅い・高</text>
      <text x="350" y="214" text-anchor="middle" class="d">アクセス層は後から変更できる（汎用v2のBlobが対象）</text>
    </svg>`,
  },

  // リソース階層
  "resource-hierarchy": {
    title: "Azureの管理階層（管理グループ→サブスク→RG→リソース）",
    svg: `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:13px;font-weight:700} .d{fill:var(--text-dim);font-size:11.5px}
        .l1{fill:none;stroke:var(--primary);stroke-width:2}
        .l2{fill:none;stroke:var(--accent);stroke-width:2}
        .l3{fill:none;stroke:#f5a623;stroke-width:2}
        .l4{fill:var(--surface-2);stroke:var(--border)}</style>
      <rect x="20" y="20" width="660" height="280" rx="14" class="l1"/>
      <text x="36" y="44" class="t" fill="var(--primary)">管理グループ</text><text x="160" y="44" class="d">複数のサブスクをまとめて方針を一括適用</text>
      <rect x="36" y="58" width="628" height="228" rx="12" class="l2"/>
      <text x="52" y="82" class="t" fill="var(--accent)">サブスクリプション</text><text x="210" y="82" class="d">課金とリソースの大きな区切り</text>
      <rect x="52" y="96" width="600" height="176" rx="10" class="l3"/>
      <text x="68" y="120" class="t" fill="#f5a623">リソースグループ</text><text x="220" y="120" class="d">関連リソースを束ねる入れ物（まとめて削除/権限付与）</text>
      ${[0,1,2,3].map(i=>`<rect x="${72+i*146}" y="150" width="128" height="100" rx="8" class="l4"/><text x="${136+i*146}" y="195" text-anchor="middle" class="d">リソース</text><text x="${136+i*146}" y="214" text-anchor="middle" class="d">${["VM","ストレージ","DB","NW"][i]}</text>`).join("")}
    </svg>`,
  },

  // ネットワークセキュリティグループ
  "nsg": {
    title: "ネットワークセキュリティグループ（NSG）",
    svg: `<svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text)} .d{fill:var(--text-dim);font-size:12px}
        .vm{fill:color-mix(in srgb,var(--primary) 22%,transparent);stroke:var(--primary);stroke-width:2}
        .ok{fill:color-mix(in srgb,#34d399 25%,transparent);stroke:#34d399;stroke-width:2}
        .ng{fill:color-mix(in srgb,#ff5a5a 22%,transparent);stroke:#ff5a5a;stroke-width:2}</style>
      <text x="20" y="26" font-size="14" font-weight="700" class="t">通信を「許可/拒否」のルールでフィルタする関所</text>
      <text x="60" y="120" class="d">インターネット</text>
      <line x1="60" y1="135" x2="270" y2="135" stroke="var(--text-dim)"/>
      <polygon points="270,128 286,135 270,142" fill="var(--text-dim)"/>
      <rect x="290" y="95" width="120" height="80" rx="10" class="ok"/><text x="350" y="130" text-anchor="middle" class="t" font-size="13" font-weight="700">NSG</text><text x="350" y="152" text-anchor="middle" class="d">許可/拒否ルール</text>
      <line x1="410" y1="135" x2="500" y2="135" stroke="#34d399"/>
      <polygon points="500,128 516,135 500,142" fill="#34d399"/>
      <rect x="520" y="95" width="120" height="80" rx="10" class="vm"/><text x="580" y="140" text-anchor="middle" class="t" font-size="13">仮想マシン</text>
      <text x="350" y="40" text-anchor="middle" class="ng" font-size="0"></text>
      <text x="350" y="225" text-anchor="middle" class="d">例：443番は許可、それ以外は拒否 — サブネットやNICに割り当てて使う</text>
    </svg>`,
  },

  // クラウドの種類（デプロイモデル）
  "deployment-models": {
    title: "クラウドの種類（パブリック / プライベート / ハイブリッド）",
    svg: `<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:13px;font-weight:700} .d{fill:var(--text-dim);font-size:11.5px}
        .pub{fill:color-mix(in srgb,var(--primary) 22%,transparent);stroke:var(--primary);stroke-width:2}
        .pri{fill:color-mix(in srgb,var(--accent) 22%,transparent);stroke:var(--accent);stroke-width:2}</style>
      <text x="20" y="26" font-size="14" font-weight="700" class="t">どこに環境を持つか</text>
      <rect x="30" y="50" width="190" height="150" rx="12" class="pub"/>
      <text x="125" y="82" text-anchor="middle" class="t">パブリック</text><text x="125" y="112" text-anchor="middle" class="d">Azureなど共用クラウド</text><text x="125" y="134" text-anchor="middle" class="d">初期費用なし・すぐ拡張</text>
      <rect x="255" y="50" width="190" height="150" rx="12" class="pri"/>
      <text x="350" y="82" text-anchor="middle" class="t">プライベート</text><text x="350" y="112" text-anchor="middle" class="d">自社専用（オンプレ等）</text><text x="350" y="134" text-anchor="middle" class="d">管理は自前・制御しやすい</text>
      <rect x="480" y="50" width="190" height="150" rx="12" fill="none" stroke="var(--text-dim)" stroke-width="2" stroke-dasharray="6 4"/>
      <rect x="495" y="80" width="75" height="100" rx="8" class="pub"/><rect x="560" y="80" width="100" height="100" rx="8" class="pri"/>
      <text x="575" y="72" text-anchor="middle" class="t">ハイブリッド</text><text x="575" y="200" text-anchor="middle" class="d">両方を組み合わせて使う</text>
    </svg>`,
  },

  // ID・認証（Microsoft Entra ID）
  "identity-auth": {
    title: "Microsoft Entra ID（旧 Azure AD）と認証のしくみ",
    svg: `<svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:13px;font-weight:700} .d{fill:var(--text-dim);font-size:11.5px}
        .id{fill:color-mix(in srgb,#ff7ab6 20%,transparent);stroke:#ff7ab6;stroke-width:2}
        .gate{fill:color-mix(in srgb,var(--accent) 18%,transparent);stroke:var(--accent);stroke-width:2}
        .app{fill:color-mix(in srgb,var(--primary) 18%,transparent);stroke:var(--primary);stroke-width:2}</style>
      <text x="20" y="26" font-size="14" font-weight="700" class="t">「誰か」を確認して、許可された人だけ中に入れる</text>
      <rect x="30" y="90" width="120" height="80" rx="10" class="id"/><text x="90" y="125" text-anchor="middle" class="t">ユーザー</text><text x="90" y="148" text-anchor="middle" class="d">/グループ</text>
      <line x1="150" y1="130" x2="205" y2="130" stroke="var(--text-dim)"/><polygon points="205,123 221,130 205,137" fill="var(--text-dim)"/>
      <rect x="225" y="70" width="180" height="120" rx="12" class="id"/><text x="315" y="105" text-anchor="middle" class="t">Microsoft Entra ID</text><text x="315" y="130" text-anchor="middle" class="d">クラウドのID管理</text>
      <rect x="248" y="145" width="60" height="30" rx="6" class="gate"/><text x="278" y="165" text-anchor="middle" class="d">MFA</text>
      <rect x="318" y="145" width="74" height="30" rx="6" class="gate"/><text x="355" y="165" text-anchor="middle" class="d">条件付き</text>
      <line x1="405" y1="130" x2="460" y2="130" stroke="var(--accent)"/><polygon points="460,123 476,130 460,137" fill="var(--accent)"/>
      <rect x="480" y="70" width="190" height="120" rx="12" class="app"/><text x="575" y="100" text-anchor="middle" class="t">アプリ各種</text><text x="575" y="124" text-anchor="middle" class="d">Azure / Microsoft 365</text><text x="575" y="146" text-anchor="middle" class="d">SaaS など</text><text x="575" y="170" text-anchor="middle" class="d">SSO＝一度の認証で全部</text>
      <text x="350" y="225" text-anchor="middle" class="d">MFA（多要素認証）＝パスワード＋スマホ等で本人確認を強化 / 条件付きアクセス＝状況に応じて許可・追加認証</text>
    </svg>`,
  },

  // 管理ツール
  "management-tools": {
    title: "Azureを操作する管理ツール（同じ操作を好みの方法で）",
    svg: `<svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:12.5px;font-weight:700} .d{fill:var(--text-dim);font-size:11px}
        .tool{fill:var(--surface-2);stroke:var(--border)} .core{fill:color-mix(in srgb,var(--primary) 22%,transparent);stroke:var(--primary);stroke-width:2}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">同じAzureを、GUIでもコマンドでも操作できる</text>
      ${[["Azure portal","ブラウザの画面（GUI）"],["Azure CLI","コマンド（az ...）"],["Azure PowerShell","コマンド/スクリプト"],["Cloud Shell","ブラウザ内のターミナル"]].map((tl,i)=>{
        const x=20+i*168;return `<rect x="${x}" y="44" width="152" height="62" rx="9" class="tool"/><text x="${x+76}" y="70" text-anchor="middle" class="t">${tl[0]}</text><text x="${x+76}" y="92" text-anchor="middle" class="d">${tl[1]}</text><line x1="${x+76}" y1="106" x2="350" y2="180" stroke="var(--border)"/>`;
      }).join("")}
      <rect x="230" y="180" width="240" height="70" rx="12" class="core"/><text x="350" y="212" text-anchor="middle" class="t" font-size="14">Azure リソース</text><text x="350" y="234" text-anchor="middle" class="d">VM・ストレージ・NW…</text>
      <text x="350" y="278" text-anchor="middle" class="d">スマホからは Azure Mobile App でも管理できる</text>
    </svg>`,
  },

  // 仮想ネットワーク
  "virtual-network": {
    title: "仮想ネットワーク（VNet）とサブネット・ピアリング",
    svg: `<svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:12.5px;font-weight:700} .d{fill:var(--text-dim);font-size:11px}
        .vnet{fill:none;stroke:var(--primary);stroke-width:2}
        .sub{fill:color-mix(in srgb,var(--accent) 14%,transparent);stroke:var(--accent)}
        .vm{fill:var(--surface-2);stroke:var(--border)}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">クラウド上の自分専用ネットワーク。中をサブネットで仕切る</text>
      <rect x="20" y="44" width="330" height="210" rx="12" class="vnet"/><text x="36" y="66" class="t" fill="var(--primary)">VNet A（例 10.0.0.0/16）</text>
      ${[["サブネット1",0],["サブネット2",1]].map(([nm,i])=>`<rect x="36" y="${82+i*78}" width="298" height="66" rx="8" class="sub"/><text x="48" y="${100+i*78}" class="d">${nm}</text>${[0,1].map(j=>`<rect x="${70+j*120}" y="${108+i*78}" width="100" height="30" rx="6" class="vm"/><text x="${120+j*120}" y="${128+i*78}" text-anchor="middle" class="d">仮想マシン</text>`).join("")}`).join("")}
      <rect x="430" y="90" width="250" height="120" rx="12" class="vnet"/><text x="446" y="112" class="t" fill="var(--primary)">VNet B</text><rect x="446" y="126" width="218" height="60" rx="8" class="sub"/><text x="555" y="162" text-anchor="middle" class="d">別のネットワーク</text>
      <line x1="350" y1="150" x2="430" y2="150" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/><text x="390" y="142" text-anchor="middle" class="d" fill="var(--accent)">ピアリング</text>
      <text x="390" y="172" text-anchor="middle" class="d">＝VNet同士を接続</text>
    </svg>`,
  },

  // コスト関連ツール
  "cost-tools": {
    title: "コスト関連のツールの使い分け",
    svg: `<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:13px;font-weight:700} .d{fill:var(--text-dim);font-size:11px} .ph{fill:var(--accent);font-size:11px;font-weight:700}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">「これから」見積もるのか「実際の費用」を管理するのか</text>
      ${[
        ["料金計算ツール","これから使う構成の","料金を事前に見積もる","使う前"],
        ["TCO 計算ツール","オンプレ→クラウドの","総コストを比較","移行検討"],
        ["Cost Management","実際にかかった費用を","管理・予算アラート","運用中"],
        ["Azure Advisor","コスト削減などの","改善を推奨","運用中"],
      ].map((c,i)=>{const x=18+i*168;return `<rect x="${x}" y="48" width="152" height="130" rx="11" fill="var(--surface-2)" stroke="var(--border)"/><text x="${x+76}" y="74" text-anchor="middle" class="t" font-size="12">${c[0]}</text><text x="${x+76}" y="102" text-anchor="middle" class="d">${c[1]}</text><text x="${x+76}" y="120" text-anchor="middle" class="d">${c[2]}</text><text x="${x+76}" y="158" text-anchor="middle" class="ph">${c[3]}</text>`;}).join("")}
      <text x="350" y="212" text-anchor="middle" class="d">見積り（料金計算・TCO）→ 運用中の管理（Cost Management・Advisor）</text>
    </svg>`,
  },

  // バックアップ／災害復旧
  "backup-recovery": {
    title: "Azure Backup と Azure Site Recovery の違い",
    svg: `<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:13px;font-weight:700} .d{fill:var(--text-dim);font-size:11.5px}
        .a{fill:color-mix(in srgb,var(--accent) 18%,transparent);stroke:var(--accent);stroke-width:2}
        .b{fill:color-mix(in srgb,#ff8c42 20%,transparent);stroke:#ff8c42;stroke-width:2}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">「データを戻す」のか「動かし続ける」のか</text>
      <rect x="30" y="48" width="300" height="150" rx="12" class="a"/><text x="180" y="78" text-anchor="middle" class="t">Azure Backup</text>
      <text x="180" y="106" text-anchor="middle" class="d">データを定期的にコピー保存</text><text x="180" y="128" text-anchor="middle" class="d">消した/壊れたデータを</text><text x="180" y="148" text-anchor="middle" class="d">後から元に戻せる（復元）</text><text x="180" y="178" text-anchor="middle" class="d">目的：データ保護</text>
      <rect x="370" y="48" width="300" height="150" rx="12" class="b"/><text x="520" y="78" text-anchor="middle" class="t">Azure Site Recovery</text>
      <text x="520" y="106" text-anchor="middle" class="d">VMを別リージョンに複製</text><text x="520" y="128" text-anchor="middle" class="d">障害時はそちらへ切替</text><text x="520" y="148" text-anchor="middle" class="d">（フェールオーバー）</text><text x="520" y="178" text-anchor="middle" class="d">目的：災害対策・止めない</text>
    </svg>`,
  },

  // オンプレ接続
  "connectivity": {
    title: "オンプレミスとAzureをつなぐ方法（VPN / ExpressRoute）",
    svg: `<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:12.5px;font-weight:700} .d{fill:var(--text-dim);font-size:11px}
        .on{fill:color-mix(in srgb,var(--accent) 16%,transparent);stroke:var(--accent);stroke-width:2}
        .az{fill:color-mix(in srgb,var(--primary) 16%,transparent);stroke:var(--primary);stroke-width:2}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">自社ネットワークとAzureを安全につなぐ2つの方法</text>
      <rect x="30" y="60" width="150" height="150" rx="12" class="on"/><text x="105" y="135" text-anchor="middle" class="t">オンプレミス</text><text x="105" y="156" text-anchor="middle" class="d">自社ネットワーク</text>
      <rect x="520" y="60" width="150" height="150" rx="12" class="az"/><text x="595" y="135" text-anchor="middle" class="t">Azure VNet</text>
      <line x1="180" y1="105" x2="520" y2="105" stroke="var(--text-dim)" stroke-width="2" stroke-dasharray="6 4"/><text x="350" y="96" text-anchor="middle" class="t" fill="var(--text-dim)">サイト間VPN</text><text x="350" y="120" text-anchor="middle" class="d">インターネット経由・暗号化トンネル（手軽）</text>
      <line x1="180" y1="170" x2="520" y2="170" stroke="var(--primary)" stroke-width="3"/><text x="350" y="160" text-anchor="middle" class="t" fill="var(--primary)">ExpressRoute</text><text x="350" y="194" text-anchor="middle" class="d">専用線・ネットを通らない（高速・安定・高価）</text>
    </svg>`,
  },

  // 複合SLA
  "sla": {
    title: "SLA（サービスレベル契約）と複合SLA",
    svg: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:12.5px;font-weight:700} .d{fill:var(--text-dim);font-size:11.5px}
        .s{fill:color-mix(in srgb,var(--primary) 18%,transparent);stroke:var(--primary);stroke-width:2}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">SLA＝稼働率の約束。サービスを直列で使うと数値は下がる</text>
      <rect x="40" y="70" width="150" height="70" rx="10" class="s"/><text x="115" y="100" text-anchor="middle" class="t">サービスA</text><text x="115" y="122" text-anchor="middle" class="d">99.9%</text>
      <text x="205" y="112" font-size="20" fill="var(--text-dim)">×</text>
      <rect x="235" y="70" width="150" height="70" rx="10" class="s"/><text x="310" y="100" text-anchor="middle" class="t">サービスB</text><text x="310" y="122" text-anchor="middle" class="d">99.9%</text>
      <text x="400" y="112" font-size="20" fill="var(--text-dim)">=</text>
      <rect x="430" y="62" width="230" height="86" rx="10" fill="color-mix(in srgb,var(--accent) 16%,transparent)" stroke="var(--accent)" stroke-width="2"/><text x="545" y="92" text-anchor="middle" class="t">組み合わせた全体</text><text x="545" y="120" text-anchor="middle" class="d" fill="var(--accent)">約 99.8%（下がる）</text>
      <text x="350" y="190" text-anchor="middle" class="d">数字が大きいほど止まりにくい。99.9%でも年に約8.7時間は止まりうる</text>
      <text x="350" y="214" text-anchor="middle" class="d">無料サービスやプレビュー段階のサービスはSLAの対象外</text>
    </svg>`,
  },

  // CapEx / OpEx
  "capex-opex": {
    title: "CapEx（設備投資）と OpEx（運用支出）",
    svg: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:13px;font-weight:700} .d{fill:var(--text-dim);font-size:11.5px}
        .cap{fill:color-mix(in srgb,#ff8c42 20%,transparent);stroke:#ff8c42;stroke-width:2}
        .op{fill:color-mix(in srgb,var(--primary) 18%,transparent);stroke:var(--primary);stroke-width:2}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">先に大きく買うか、使った分だけ払うか</text>
      <rect x="30" y="50" width="300" height="160" rx="12" class="cap"/><text x="180" y="80" text-anchor="middle" class="t">CapEx（設備投資）</text>
      <text x="180" y="108" text-anchor="middle" class="d">サーバー等を購入＝最初に</text><text x="180" y="128" text-anchor="middle" class="d">まとまった前払い</text>
      <rect x="80" y="150" width="40" height="40" class="cap"/><rect x="130" y="150" width="40" height="40" class="cap"/><text x="245" y="175" text-anchor="middle" class="d">オンプレに多い</text>
      <rect x="370" y="50" width="300" height="160" rx="12" class="op"/><text x="520" y="80" text-anchor="middle" class="t">OpEx（運用支出）</text>
      <text x="520" y="108" text-anchor="middle" class="d">使った分だけ月々払い</text><text x="520" y="128" text-anchor="middle" class="d">（従量課金）初期費用が小さい</text>
      ${[0,1,2,3,4].map(i=>`<rect x="${410+i*40}" y="${185-i*7}" width="26" height="${10+i*7}" class="op"/>`).join("")}<text x="600" y="175" text-anchor="middle" class="d">クラウドに多い</text>
    </svg>`,
  },

  // ガバナンス
  "governance": {
    title: "リソースを管理・保護するしくみ（Policy / ロック / タグ / Blueprint）",
    svg: `<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      <style>.t{fill:var(--text);font-size:12.5px;font-weight:700} .d{fill:var(--text-dim);font-size:11px}</style>
      <text x="20" y="24" font-size="14" font-weight="700" class="t">ルールを守らせ、間違いや無秩序を防ぐ4つの道具</text>
      ${[
        ["Azure Policy","ルールを強制","例：許可リージョン以外に","作らせない","#5ac8fa"],
        ["リソースロック","誤削除を防止","読み取り専用/削除禁止を","かけられる","#ff5a5a"],
        ["タグ","分類のラベル","部署・用途で色分けし","コスト集計に使う","#a3e635"],
        ["Blueprint","環境のひな形","ポリシー+構成をまとめて","一括展開","#7c5cff"],
      ].map((c,i)=>{const x=18+i*168;return `<rect x="${x}" y="48" width="152" height="150" rx="11" fill="var(--surface-2)" stroke="${c[4]}" stroke-width="2"/><text x="${x+76}" y="76" text-anchor="middle" class="t" fill="${c[4]}">${c[0]}</text><text x="${x+76}" y="104" text-anchor="middle" class="d">${c[1]}</text><text x="${x+76}" y="138" text-anchor="middle" class="d">${c[2]}</text><text x="${x+76}" y="156" text-anchor="middle" class="d">${c[3]}</text>`;}).join("")}
      <text x="350" y="232" text-anchor="middle" class="d">これらは管理グループ／サブスク／リソースグループの階層に割り当てて効かせる</text>
    </svg>`,
  },
};
