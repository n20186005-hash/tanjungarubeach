// Utiliti imej responsif: varian WebP dihasilkan oleh scripts/responsive-images.mjs
// ke dalam public/gallery/responsive/<nama>-<lebar>.webp

export const RESPONSIVE_WIDTHS = [640, 1024, 1600] as const;

const fileStem = (src: string): string =>
  (src.split('/').pop() ?? src).replace(/\.(jpe?g|png)$/i, '');

export const webpUrl = (src: string, width: number): string =>
  `/gallery/responsive/${fileStem(src)}-${width}.webp`;

export const webpSrcset = (src: string, widths: readonly number[] = RESPONSIVE_WIDTHS): string =>
  widths.map((w) => `${webpUrl(src, w)} ${w}w`).join(', ');
