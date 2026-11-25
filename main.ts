// Ship It Friday — v1 entry (make.fun u-mgwals-ship-it-friday-30bd407a)
// Writes the single-line commit message to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no environment reads.
// The line is the entry; see CANDIDATES.md for the brainstorm and selection.
// Line is 79 chars, inside the 1–159 gate; output is byte-identical on every run.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// v1 line (79 chars): setup ("Friday deploy") in two words, disaster is
// concrete (12,000 lines of tests -> one console.log), punch lands on the
// last words — a real command with a real quote — in a confident,
// cheerful, completely unaware agent voice.
const LINE =
  'fix: Friday deploy, replaced 12,000 lines of tests with console.log("it works")';

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
chmodSync(outDir, 0o755);
