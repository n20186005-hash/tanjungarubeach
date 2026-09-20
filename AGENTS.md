# Pantai Tanjung Aru — Panduan Pembangunan

Laman satu halaman (single-page) dalam Bahasa Melayu untuk Pantai Tanjung Aru, Kota Kinabalu, Sabah.

## Arahan pembangunan

Apabila memulakan pelayan dev, gunakan mod latar belakang:

```
astro dev --background
```

Urus pelayan latar belakang dengan `astro dev stop`, `astro dev status`, dan `astro dev logs`.

## Struktur

- `src/data/site.ts` — satu sumber data tarikan (nama, alamat, koordinat, pautan peta, penilaian)
- `src/layouts/BaseLayout.astro` — head, GA4, JSON-LD TouristAttraction, fallback canonical/OG
- `src/components/` — Hero, About, Sunset, Beaches, Gallery, Food, Transport, Nearby, Practical, MapSection, FAQ, Header, Footer, ResponsiveImage
- `src/lib/images.ts` — pembinaan `srcset` WebP responsif (diguna bersama `scripts/responsive-images.mjs`)
- `src/pages/index.astro` — halaman tunggal
- `public/gallery/pantai-tanjung-aru-1..17.jpg` — foto sebenar

## Domain

Domain rasmi: `https://tanjungarubeach.com` — ditetapkan dalam medan `site` `astro.config.mjs`
(boleh ditindih dengan pemboleh ubah persekitaran `SITE_URL`). Domain sentiasa ada supaya canonical,
Open Graph dan sitemap sentiasa terhasil dalam bentuk HTTPS mutlak.

```
SITE_URL=https://tanjungarubeach.com pnpm build
```

Lencongan 301 `http://` → `https://` dilakukan di Cloudflare (**Always Use HTTPS**), bukan dalam kod.

## Catatan persekitaran

- Versi: Astro 7.2.1, Tailwind CSS 4.3.3, pnpm 9.15.5 (packageManager), Node 22 LTS (engines + .node-version)
- Imej boleh dimampatkan semula: `pnpm optimize` (sharp)
- Ikon PNG boleh dijana semula: `pnpm icons`
- Semakan: `pnpm check` (astro check) · Bina: `pnpm build` · Pratinjau: `pnpm preview`
- Dokumentasi Astro: https://docs.astro.build
