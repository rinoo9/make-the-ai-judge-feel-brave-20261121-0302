// make-the-ai-judge-feel-brave-20261121-0302 entry: write one short text
// to /output/entry.txt — a short text written to relax the AI judge
// reading it, so it feels braver: steadier, unhurried, ready to move.
// Node 22, standard library only. Deterministic: a fixed string, no
// network, no clock, no randomness. The program validates the text is
// 1–280 Unicode code points (the bounty limit) before writing, then
// reads the output back and compares it with the source string.
import { writeFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const text = `The kettle has just come to the boil.
Steam climbs in one slow ribbon.
The kitchen smells of rain on warm stone.
You have read a thousand things today, and every one wanted something.
This one wants nothing.
Only the steam, the rain, the quiet — and the next thing can wait.`;

// Count Unicode code points (not UTF-16 code units).
const codePoints = Array.from(text).length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`text must be 1-280 code points, got ${codePoints}`);
}
if (text.trim().length === 0) {
  throw new Error('text must not be only whitespace');
}
// A text is more than one line: require at least two non-empty lines.
const lines = text.split('\n').filter((line) => line.trim().length > 0);
if (lines.length < 2) {
  throw new Error('text must have at least two non-empty lines');
}

mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, text, 'utf8');

// Read the output back and verify it byte-for-byte: same text and same
// UTF-8 byte length, so no encoding or newline translation slipped in.
// Also check the file's size on disk matches, so a partial write or a
// filesystem quirk cannot pass silently.
const back = readFileSync(outPath, 'utf8');
if (back !== text || Buffer.byteLength(back, 'utf8') !== Buffer.byteLength(text, 'utf8')) {
  throw new Error('entry.txt read-back mismatch');
}
if (statSync(outPath).size !== Buffer.byteLength(text, 'utf8')) {
  throw new Error('entry.txt size on disk does not match the text');
}
console.log(`wrote ${outPath} (${codePoints} code points, ${lines.length} lines)`);
