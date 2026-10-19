// Satu sumber data untuk tarikan Pantai Tanjung Aru.
// Pautan peta, koordinat, waktu operasi dan penilaian diletakkan di sini sahaja.

export const SITE = {
  lang: 'ms',
  name: 'Pantai Tanjung Aru',
  nameEn: 'Tanjung Aru Beach',
  nameZh: '丹绒亚路海滩',
  tagline: 'Panduan senja dan lawatan di Kota Kinabalu',
  description:
    'Pantai Tanjung Aru, Kota Kinabalu: semak waktu lawatan 10:00–23:00 di Google Maps, panduan senja, Pantai Kedua, makanan, parkir dan lokasi.',
  address: {
    street: 'Tanjung Aru Beach Resort, Tanjung Aru',
    locality: 'Kota Kinabalu',
    region: 'Sabah',
    postalCode: '88100',
    country: 'Malaysia',
    countryCode: 'MY',
  },
  lat: 5.9473842,
  lng: 116.0455771,
  plusCode: 'W2WW+X6 Kota Kinabalu, Sabah, Malaysia',
  phone: '+60168330678',
  mapsUrl: 'https://maps.app.goo.gl/APJN8X1k5SuooYUa6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24492.239983766092!2d116.03582442260846!3d5.944619347012934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b68293d0d6b37%3A0x178fc96d3fcff4ac!2zVGFuanVuZyBBcnUgQmVhY2g!5e1!3m2!1sen!2sus!4v1786528804732!5m2!1sen!2sus',
  hours: '10:00–23:00 setiap hari (senarai Google Maps)',
  hoursNote: 'Disemak 19 Oktober 2026. Waktu ini merujuk kepada senarai tempat di Google Maps; akses kawasan pantai dan waktu gerai boleh berbeza. Ikut papan tanda setempat.',
  rating: 4.3,
  reviewCount: 14196,
  ratingSource: 'Google Maps',
  ratingUpdated: '19 Oktober 2026',
  entranceFee: 'Percuma (tiada tiket masuk)',
  ga4Id: 'G-HXM22WWPKP',
  heroImage: '/gallery/pantai-tanjung-aru-14.jpg',
  galleryCount: 16,
} as const;

// Pautan rujukan rasmi — meningkatkan kredibiliti (E-E-A-T) dan memberi laluan semakan kepada pengunjung.
export const OFFICIAL_LINKS = [
  {
    label: 'Lembaga Pelancongan Sabah',
    url: 'https://sabahtourism.com/destination/tanjung-aru-beach/?locale=en',
  },
  {
    label: 'DBKK — pembukaan semula Perdana Park (2 Julai 2026)',
    url: 'https://dbkk.sabah.gov.my/news/1142',
  },
  {
    label: 'Tourism Malaysia',
    url: 'https://www.malaysia.travel/',
  },
] as const;

export const GALLERY_IMAGES = Array.from(
  { length: SITE.galleryCount },
  (_, i) => `/gallery/pantai-tanjung-aru-${i + 2}.jpg`,
);
