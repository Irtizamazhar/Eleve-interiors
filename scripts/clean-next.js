/**
 * Remove .next so `next dev` / `next build` always regenerate chunk filenames in sync.
 * Run: node scripts/clean-next.js
 */
const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');

try {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log('Removed .next');
} catch (e) {
  if (e && e.code !== 'ENOENT') throw e;
  console.log('.next already absent');
}
