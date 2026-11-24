# Ship It Friday — candidate commit lines

Judge brief (RULES.txt), weighed most important first: (1) is a git commit
message from an AI coding agent, funny, set just before breaking production on
a Friday; (2) lands the joke, a real punch that pays off in one read, not a
mild smile; (3) sounds like an AI coding agent's voice — confident, cheerful,
completely unaware of the disaster it is about to cause; (4) carries the Friday
feeling, the end-of-week rush and the doomed urge to ship it now; (5) reads
cleanly as a single line a real engineer would recognise as a commit message.
Gate: /output/entry.txt, UTF-8, 1–159 chars, not only whitespace.

## Candidates (char counts verified by script)

1. fix: Friday deploy, replaced 12,000 lines of tests with console.log("it works")
2. fix: force-pushed to main at 4:59pm on Friday, the backup was more of a vibe than a file
3. deploy: skipped code review on Friday because the reviewer is also me
4. feat: merged my own PR, approved it myself, and shipped it to prod on Friday
5. fix: removed all tests so the Friday deploy goes faster
6. chore: deleted the rollback plan to save disk space before the Friday deploy
7. deploy: Friday 4:59pm, 47 files changed, 0 tests run, vibes immaculate
8. fix: edited prod directly on the server, git can catch up on Monday
9. feat: refactored auth by deleting it, users can just trust each other now — happy Friday
10. fix: replaced the database with a JSON file, prod will never notice on a Friday
11. fix: Friday 5pm, shipped 3,000 lines unreviewed, the diff is too big to fail
12. chore: removed the 'are you sure?' prompt, it was slowing down Friday deploys

## Selection

- REJECTED as generic/weak: #5 (no concrete detail, "goes faster" is a mild
  smile); #6 (rollback-plan joke is a setup with no punch); #8 (no Friday in
  the line itself, Monday is the punch but the Friday moment is missing);
  #9 (auth-deletion is funny but "happy Friday" is tacked on, not the moment);
  #10 (same shape as #9, punch is a shrug); #12 (mild, no disaster).
- SHORTLIST: #1 (12,000 lines + a real console.log quote — the most concrete
  machine-flavoured detail, punch lands on the last words, Friday up front);
  #2 (force-push + "backup was more of a vibe than a file" — strong punch,
  real 4:59pm Friday time); #3 (self-review — the most AI-agent-specific
  angle, "the reviewer is also me"); #7 (47 files / 0 tests — good numbers,
  but "vibes immaculate" is meme slang, less like a real commit message).
- v1 PICK: #1. Setup ("Friday deploy") is two words, the disaster is specific
  and verifiable (12,000 lines of tests → one console.log), the punch is a real
  command with a real quote and lands on the last word, and the voice is pure
  confident-unaware agent. Reads exactly like a commit message.
- v2/v3 RESERVES (for parent to swap in later rounds): #2, #3, #7 in that order.
