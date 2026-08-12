// Mampatkan gambar di public/gallery untuk web (maks 1800px, kualiti 78).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'public', 'gallery');
const files = readdirSync(dir).filter(
  (f) => f.toLowerCase().endsWith('.jpg') && !f.startsWith('.'),
);

for (const f of files) {
  const fp = path.join(dir, f);
  const before = statSync(fp).size;
  const buf = readFileSync(fp);
  const meta = await sharp(buf).metadata();
  const out = await sharp(buf)
    .resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 78, progressive: true })
    .toBuffer();
  writeFileSync(fp, out);
  const after = statSync(fp).size;
  console.log(`${f}: ${meta.width}x${meta.height} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}
console.log(`Selesai: ${files.length} gambar.`);
