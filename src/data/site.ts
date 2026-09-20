// Satu sumber data untuk tarikan Pantai Tanjung Aru.
// Pautan peta, koordinat, waktu operasi dan penilaian diletakkan di sini sahaja.

export const SITE = {
  lang: 'ms',
  name: 'Pantai Tanjung Aru',
  nameEn: 'Tanjung Aru Beach',
  nameZh: '丹绒亚路海滩',
  tagline: 'Pantai senja tercantik di Kota Kinabalu',
  description:
    'Panduan lengkap Pantai Tanjung Aru (Tanjung Aru Beach) di Kota Kinabalu, Sabah: waktu senja terbaik, gerai makanan, cara ke sana, tempat letak kereta dan info praktikal. Kemasukan percuma.',
  address: {
    street: 'Tanjung Aru Beach Resort, Tanjung Aru',
    locality: 'Kota Kinabalu',
    region: 'Sabah',
    postalCode: '88100',
    country: 'Malaysia',
    countryCode: 'MY',
  },
  lat: 5.9472,
  lng: 116.0441,
  plusCode: 'W2WW+X6 Kota Kinabalu, Sabah, Malaysia',
  phone: '+60168330678',
  mapsUrl: 'https://maps.app.goo.gl/APJN8X1k5SuooYUa6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24492.239983766092!2d116.03582442260846!3d5.944619347012934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b68293d0d6b37%3A0x178fc96d3fcff4ac!2zVGFuanVuZyBBcnUgQmVhY2g!5e1!3m2!1sen!2sus!4v1786528804732!5m2!1sen!2sus',
  hours: 'Buka 24 jam, setiap hari',
  rating: 4.3,
  reviewCount: 14159,
  ratingSource: 'Google Maps',
  ratingUpdated: 'September 2026',
  entranceFee: 'Percuma (tiada tiket masuk)',
  ga4Id: 'G-HXM22WWPKP',
  heroImage: '/gallery/pantai-tanjung-aru-14.jpg',
  galleryCount: 16,
} as const;

// Pautan rujukan rasmi — meningkatkan kredibiliti (E-E-A-T) dan memberi laluan semakan kepada pengunjung.
export const OFFICIAL_LINKS = [
  {
    label: 'Lembaga Pelancongan Sabah',
    url: 'https://www.sabahtourism.com/',
  },
  {
    label: 'Dewan Bandaraya Kota Kinabalu (DBKK)',
    url: 'https://www.dbkk.sabah.gov.my/',
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
