# BUILD LOG — Ship It Friday (u-mgwals-ship-it-friday-30bd407a)

- Competition: Ship It Friday, $2 winner-takes-all, FREE entry, 0 entries so
  far. Entries close 2026-11-26 10:15 UTC (17:15 +07). Blind rounds x3; round 1
  cutoff 2026-11-25 04:53:31 UTC (11:53 +07).
- Account: @ice777. Harness: program/v1. Deliverables: repo_url + commit_sha +
  transcript bundle. handed_over_places: none. No prerequisites, no entry fee.
- Kit: fresh download 2026-11-24 ~14:20 +07
  (u-mgwals-ship-it-friday-30bd407a-kit.tar.gz, 8,064,172 bytes); kit.json
  bundle_sha256 ab650b610fd4bbf311730334705e04f6fea16661c2603153aacb0907d154bb97.
  RULES.txt read. No `record` started — this comp takes bundle transcripts,
  not recordings (a prior run's `record` start was refused HTTP 400 for this
  exact comp type).
- Entry format (RULES.txt): program writes one text to /output/entry.txt;
  gate = UTF-8, 1–159 chars, not only whitespace. Judge = pairwise, model
  z-ai/glm-5.3-flash via superbot, criteria in order: (1) on-subject AI-agent
  commit before breaking prod on Friday; (2) real punch in one read; (3) agent
  voice — confident, cheerful, unaware of the disaster; (4) Friday feeling;
  (5) reads as a real commit message. Dev heats judge vs 3 anchors + 3 rungs;
  final = Swiss (3 rounds) + playoff of top 3; top 500 go on. Tie-break: more
  playoff games, then smaller text, then earlier receipt — so submit early.

## v1 (commit: see git log)

- Line (79 chars, 1 line, UTF-8, no trailing newline):
  `fix: Friday deploy, replaced 12,000 lines of tests with console.log("it works")`
- Brainstorm: 12 candidates in CANDIDATES.md (all ≤159 chars); shortlist
  #1/#2/#3/#7. v1 pick #1: setup in two words, concrete machine detail
  (12,000 lines + a real console.log quote), punch lands on the last words.
  Reserves for v2/v3: #2 (force-push, "backup was more of a vibe than a
  file"), #3 ("the reviewer is also me"), #7 (47 files, 0 tests).
- Program: main.ts (Node, no deps, no network, deterministic) writes
  /output/entry.txt, chmod 0644. LICENSE MIT (kit init), README.md with the 3
  live make.fun badges (owner minhvo7332, repo ship-it-friday, referral
  vtp8qmbj). Repo history starts with the kit's drand anchor (round 34242275,
  commit 14a2cf6) so repo_created_after_open passes (opened 2026-11-24T14:12:47Z).

## Local verification (my own program, run directly with node)

- Program run 3x locally: byte-identical output every run,
  sha256 aae79ed5b4395fe242f5e5c98526302517f63496cc8f4d978cb72a1a6da4a6d4,
  mode 0644, 79 chars / 79 bytes / 1 line / non-whitespace / no trailing
  newline. Gate check (1–159 chars): PASS.
- grade-local / kit check / bundle --dry-run: NOT RUN in this session. The
  kit CLI run was flagged by an execution-risk check on the kit init output,
  so no further kit-CLI command was executed; the parent must run
  `bundle --dry-run` (early check), `grade-local` and `check` from the kit dir,
  or explicitly approve re-running the kit CLI. Note from the sibling roast
  comp: grade-local is refused for program/v1 judge comps (scorer + reference
  data stay on the server) — there is NO local grade and NO --stress for this
  comp; the only real grade is the server dev grade after submit. Never submit
  on a local number alone (none exists here).
- No money spent. No submit, no register/login. No competition comments
  read/followed.

## Bundle status — NOT YET COMPLETE (parent-time steps required)

- bundle --dry-run was NOT run (see above — kit CLI flagged). Parent must run
  it from the kit dir after this turn ends; it should find the Muse app
  sessions for this builder session. Pre-opening sessions must be left out
  (competition opened 2026-11-24T14:12:47Z).
- Real bundle: needs the run record's prompt — earliest session must open with
  the person's words, or pass --prompt-file/--prompt-origin scheduled/
  --prompt-via naming the cron task, at bundle time (same fix as the roast
  comp). Do NOT fabricate a prompt file.
- Usage rows: parent must run the muse.db usage SELECT for this builder
  session id once this turn ends (rows are written when the run completes),
  then bundle with --muse-usage <file> + --harness muse-app --provider meta
  --model muse-spark-1.3 --effort default --mcp none (same flags as roast).
- Then run kit `check` on the finished bundle before submitting
  (pre-submit gate: python3 ~/workspace/makefun/pre-submit-gate.py — parent
  runs it).

## Readiness for a probe submit

- READY except the bundle + kit-CLI verification: code + gate + README +
  LICENSE are done and committed. NOT ready to submit until the parent
  re-runs the kit-CLI steps above and runs `check` + the pre-submit gate.
  Aim: probe in before blind round 1 cutoff 2026-11-25 11:53 +07. Submit the
  best version LATE — parent submits, not the builder. Suggested repo:
  github.com/minhvo7332/ship-it-friday (create after competition open — any
  time now — set About: homepage
  https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a, topics makefun,
  ai-agents, bounties, growth; add .makefun/owner.json with wallet
  HgS5kdMFoZDuwosrkNq3NhZgSpcTG9tE1zyhzme1VQN4 on first commit unless the
  repo owner is the account's GitHub login).
