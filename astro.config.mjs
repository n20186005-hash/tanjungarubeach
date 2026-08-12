// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 站点域名只在此一处配置：写入 SITE_URL 环境变量（如 https://pantaitanjaru.com）或留空。
// 留空时项目仍可正常构建——canonical / Open Graph 等绝对 URL 优雅降级（相对路径或省略），
// sitemap 集成仅在域名已配置时启用，绝不写入占位域名。
const site = process.env.SITE_URL || '';

export default defineConfig({
	site: site || undefined,
	output: 'static',
	adapter: cloudflare({
		imageService: 'passthrough',
	}),
	integrations: [
		...(site ? [sitemap()] : []),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: true,
		},
	},
});
