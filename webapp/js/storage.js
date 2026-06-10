// LocalStorage 永続化層
const STORE_KEY = "az900_progress_v1";
const FLAG_KEY = "az900_flags_v1";
const LOG_KEY = "az900_log_v1";

const Storage = {
  _read(key, def) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : def;
    } catch (e) {
      return def;
    }
  },
  _write(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  },

  // 問題ごとの成績 { [qid]: {attempts, correct, streak, lastAnswered} }
  getProgress() {
    return this._read(STORE_KEY, {});
  },
  getStat(qid) {
    const p = this.getProgress();
    return p[qid] || { attempts: 0, correct: 0, streak: 0, lastAnswered: null };
  },
  recordAnswer(qid, isCorrect) {
    const p = this.getProgress();
    const s = p[qid] || { attempts: 0, correct: 0, streak: 0, lastAnswered: null };
    s.attempts += 1;
    if (isCorrect) {
      s.correct += 1;
      s.streak += 1;
    } else {
      s.streak = 0;
    }
    s.lastAnswered = Date.now();
    p[qid] = s;
    this._write(STORE_KEY, p);
    this._appendLog(qid, isCorrect);
  },

  // 後で見直すフラグ
  getFlags() {
    return this._read(FLAG_KEY, {});
  },
  isFlagged(qid) {
    return !!this.getFlags()[qid];
  },
  toggleFlag(qid) {
    const f = this.getFlags();
    if (f[qid]) delete f[qid];
    else f[qid] = true;
    this._write(FLAG_KEY, f);
    return !!f[qid];
  },

  // 学習ログ（カレンダー・累計用）
  _appendLog(qid, isCorrect) {
    const log = this._read(LOG_KEY, []);
    log.push({ d: this._today(), c: isCorrect ? 1 : 0 });
    this._write(LOG_KEY, log);
  },
  getLog() {
    return this._read(LOG_KEY, []);
  },
  _today() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  },

  resetAll() {
    [STORE_KEY, FLAG_KEY, LOG_KEY].forEach((k) => localStorage.removeItem(k));
  },
};
