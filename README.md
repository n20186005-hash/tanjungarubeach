# Pantai Tanjung Aru · Panduan Pelancongan

Laman satu halaman (single-page) panduan pelancongan **Pantai Tanjung Aru** — pantai senja yang paling terkenal di Kota Kinabalu, Sabah, Malaysia.

## Teknologi

- [Astro](https://astro.build) 7 + TypeScript + Tailwind CSS v4
- Pengurusan pakej: pnpm 9 (`packageManager: pnpm@9.15.5`)
- Node.js LTS 22 (`engines` + `.node-version`)
- Penggunaan: Cloudflare Workers / Pages (adaptor `@astrojs/cloudflare`, statik)
- Tiada pangkalan data, tiada log masuk, tiada CMS

## Bahasa

Bahasa Melayu (lang="ms") — bahasa utama kawasan tarikan.

## Pembangunan

```sh
pnpm install
pnpm dev        # pelayan pembangunan
pnpm check      # semakan jenis TypeScript (astro check)
pnpm build      # bina statik ke dist/
pnpm preview    # pratonton binaan
```

Skrip tambahan:

```sh
pnpm optimize    # mampatkan gambar di public/gallery (sharp)
pnpm responsive  # hasilkan varian WebP 640/1024/1600px ke public/gallery/responsive
pnpm icons       # hasilkan favicon PNG daripada public/favicon.svg
```

## Domain

Domain rasmi: **https://tanjungarubeach.com**

Nilai ini ditetapkan dalam medan `site` `astro.config.mjs` (boleh ditindih melalui pemboleh ubah persekitaran `SITE_URL`).
Domain sentiasa ada, jadi canonical, Open Graph dan sitemap (`/sitemap-index.xml`) sentiasa terhasil dalam bentuk HTTPS mutlak.

```sh
SITE_URL=https://tanjungarubeach.com pnpm build
```

## HTTPS & canonical

- `http://` **mesti** dilencongkan (301) ke `https://` di peringkat Cloudflare: aktifkan **Always Use HTTPS** (SSL/TLS → Edge Certificates).
  Ini bukan dilakukan dalam kod — tapak ini ialah aset statik, jadi lencongan dilakukan di tepi Cloudflare (atau Bulk Redirect Rules).
- HSTS dihantar melalui `public/_headers` (`Strict-Transport-Security`).
- `<link rel="canonical">` sentiasa HTTPS mutlak; `public/robots.txt` mengisytiharkan `Sitemap: https://tanjungarubeach.com/sitemap-index.xml`.

## Struktur

```
public/gallery/          # gambar sebenar (pantai-tanjung-aru-1..17.jpg)
public/logo.svg          # logo tapak
public/favicon.svg       # ikon (versi ringkas logo)
src/data/site.ts         # data tarikan (satu sumber)
src/layouts/BaseLayout.astro
src/components/          # Hero, Senja, Galeri, Makanan, Pengangkutan, Peta, FAQ, dsb.
src/pages/index.astro    # halaman tunggal
scripts/                 # utiliti bina (optimize-images, generate-icons)
```

## Catatan

- Kandungan adalah panduan pelancongan bebas; laman ini bukan laman rasmi kerajaan atau pengurusan pantai.
- Skor & ulasan dipetik daripada Google Maps (4.3 / 14,159 ulasan, September 2026) dan mungkin berubah dari masa ke masa.
- Imej dihantar sebagai WebP responsif (640/1024/1600px) dengan `width`/`height` dan `loading="lazy"` — jalankan `pnpm responsive`
  selepas menambah gambar baharu ke `public/gallery`.
