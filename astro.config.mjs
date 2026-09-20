// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain rasmi tapak: https://tanjungarubeach.com
// Nilai ini menjadi asas canonical / Open Graph / sitemap (elak pendua http vs https).
// Boleh ditinggalkan melalui pemboleh ubah persekitaran SITE_URL jika perlu membina untuk domain lain.
const site = process.env.SITE_URL || 'https://tanjungarubeach.com';

export default defineConfig({
	site,
	output: 'static',
	adapter: cloudflare({
		imageService: 'passthrough',
	}),
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: true,
		},
	},
});
