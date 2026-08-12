// Hasilkan favicon PNG (16/32/180) daripada public/favicon.svg menggunakan sharp.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'public', 'favicon.svg');
const svg = readFileSync(src);

const sizes = [
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
];

for (const { file, size } of sizes) {
  const buf = await sharp(svg, { density: 300 }).resize(size, size).png().toBuffer();
  writeFileSync(path.join(root, 'public', file), buf);
  console.log(`OK public/${file} (${size}x${size})`);
}
