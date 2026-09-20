// Hasilkan varian WebP responsif untuk gambar di public/gallery.
// Output: public/gallery/responsive/<nama>-<lebar>.webp (digunakan sebagai <source> dalam <picture>).
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const WIDTHS = [640, 1024, 1600];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'public', 'gallery');
const outDir = path.join(dir, 'responsive');
mkdirSync(outDir, { recursive: true });

const files = readdirSync(dir).filter(
  (f) => /\.(jpe?g|png)$/i.test(f) && !f.startsWith('.'),
);

let total = 0;
for (const f of files) {
  const buf = readFileSync(path.join(dir, f));
  for (const w of WIDTHS) {
    // withoutEnlargement:false supaya ketiga-tiga lebar sentiasa wujud — srcset tidak pernah menghala ke fail yang tiada.
    const out = await sharp(buf)
      .resize({ width: w, withoutEnlargement: false })
      .webp({ quality: 72 })
      .toBuffer();
    const target = path.join(outDir, `${f.replace(/\.(jpe?g|png)$/i, '')}-${w}.webp`);
    writeFileSync(target, out);
    total += statSync(target).size;
  }
}
console.log(`Selesai: ${files.length} gambar × ${WIDTHS.length} lebar (${(total / 1024 / 1024).toFixed(1)}MB WebP).`);
