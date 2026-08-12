// Satu sumber data untuk tarikan Pantai Tanjung Aru.
// Pautan peta, koordinat, waktu operasi dan penilaian diletakkan di sini sahaja.

export const SITE = {
  lang: 'ms',
  name: 'Pantai Tanjung Aru',
  nameEn: 'Tanjung Aru Beach',
  nameZh: '丹绒亚路海滩',
  tagline: 'Pantai senja tercantik di Kota Kinabalu',
  description:
    'Pantai Tanjung Aru ialah pantai bandar yang paling terkenal di Kota Kinabalu, Sabah. Pasir keemasan, air hijau biru yang tenang dan matahari terbenam bertaraf dunia menjadikannya destinasi wajib bagi pelancong.',
  address: {
    street: 'Tanjung Aru',
    locality: 'Kota Kinabalu',
    region: 'Sabah',
    postalCode: '88100',
    country: 'Malaysia',
  },
  lat: 5.9474267,
  lng: 116.0468751,
  mapsUrl: 'https://maps.app.goo.gl/APJN8X1k5SuooYUa6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24492.239983766092!2d116.03582442260846!3d5.944619347012934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b68293d0d6b37%3A0x178fc96d3fcff4ac!2zVGFuanVuZyBBcnUgQmVhY2g!5e1!3m2!1sen!2sus!4v1786528804732!5m2!1sen!2sus',
  hours: 'Buka 24 jam, setiap hari',
  rating: 4.5,
  reviewCount: 47665,
  entranceFee: 'Percuma (tiada tiket masuk)',
  ga4Id: 'G-HXM22WWPKP',
  heroImage: '/gallery/pantai-tanjung-aru-14.jpg',
  galleryCount: 16,
} as const;

export const GALLERY_IMAGES = Array.from(
  { length: SITE.galleryCount },
  (_, i) => `/gallery/pantai-tanjung-aru-${i + 2}.jpg`,
);
