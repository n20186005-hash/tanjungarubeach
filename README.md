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
pnpm optimize   # mampatkan gambar di public/gallery (sharp)
pnpm icons      # hasilkan favicon PNG daripada public/favicon.svg
```

## Domain

Nama domain dikonfigurasikan **hanya** dalam medan `site` `astro.config.mjs`, dibaca daripada pemboleh ubah persekitaran `SITE_URL`:

```sh
SITE_URL=https://pantaitanjaru.com pnpm build
```

Jika `SITE_URL` kosong, tapak tetap boleh dibina — canonical/OG menjadi relatif dan sitemap dinyahaktifkan secara automatik. Selepas domain disahkan, set sekali dan bina semula.

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
- Skor & ulasan dipetik daripada Google Maps / TripAdvisor dan mungkin berubah dari masa ke masa.
