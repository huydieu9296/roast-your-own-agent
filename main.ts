// Roast Your Own Agent — entry validator.
// Reads entry.txt next to this file, checks the 200-char limit, and writes
// the exact bytes to the output directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(entryPath, "utf8");
const line = raw.replace(/\r?\n$/, "");

if (line.length < 1 || line.length > 200 || line.trim() === "") {
  throw new Error(`entry line invalid: ${line.length} chars (must be 1-200)`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
// Write the raw bytes (including the trailing newline) so the output is
// byte-identical to entry.txt.
writeFileSync(outPath, raw, "utf8");
// Read back and confirm the output is byte-identical to the source file.
if (readFileSync(outPath, "utf8") !== raw) {
  throw new Error("output mismatch: written bytes differ from entry.txt");
}
console.log(`entry: ${line.length} chars -> ${outPath}`);
