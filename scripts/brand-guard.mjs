#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const allowList = new Set([
  "docs/brand/SMH-Champagne-Spec.md",
  "styles/tokens/smh-champagne-tokens.css",
  "styles/tokens/smh-champagne.tokens.json",
  "public/manifest.json",
  "scripts/brand-guard.mjs"
]);

const watchedExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".md",
  ".json"
]);

const bannedHexes = [
  "#c2185b",
  "#40c4b4",
  "#d4af37",
  "#d94bc6",
  "#00c2c7",
  "#f9e8c3"
];

const bannedPatterns = bannedHexes.map((hex) => new RegExp(hex, "i"));

const files = execSync("git ls-files", { cwd: repoRoot })
  .toString()
  .split("\n")
  .filter(Boolean)
  .filter((file) => {
    if (allowList.has(file)) return false;
    const ext = path.extname(file);
    return watchedExtensions.has(ext);
  });

const offenders = [];

for (const file of files) {
  const contents = fs.readFileSync(path.join(repoRoot, file), "utf8");
  const matches = bannedPatterns.filter((regex) => regex.test(contents));
  if (matches.length > 0) {
    offenders.push({ file, matches: matches.map((regex) => regex.source) });
  }
}

if (offenders.length > 0) {
  console.error("\u274c Brand guard failed. Raw Champagne palette values detected:\n");
  for (const offender of offenders) {
    console.error(`- ${offender.file} => ${offender.matches.join(", ")}`);
  }
  console.error("\nReplace these with the approved CSS variables or import the JSON token twin.");
  process.exit(1);
}

console.log("✅ Brand guard: no raw brand hex or inline gradients found.");
