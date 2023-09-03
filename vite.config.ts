import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'


export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA({
		strategies: 'generateSW',
		manifest: {
			theme_color: "#358ef6",
			background_color: "#358ef6",
			display: "standalone",
			scope: "/",
			start_url: "/",
			name: "Svelte PWA",
			short_name: "Svelte PWA",
			orientation: 'portrait',
			icons: [
				{
					"src": "/icons/icon-192x192.png",
					"sizes": "192x192",
					"type": "image/png",
					"purpose": "any maskable"
				},
				{
					"src": "/icons/icon-256x256.png",
					"sizes": "256x256",
					"type": "image/png",
					"purpose": "any maskable"
				},
				{
					"src": "/icons/icon-384x384.png",
					"sizes": "384x384",
					"type": "image/png",
					"purpose": "any maskable"
				},
				{
					"src": "/icons/icon-512x512.png",
					"sizes": "512x512",
					"type": "image/png",
					"purpose": "any maskable"
				}
			]
		}
	})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	build: {
		sourcemap: true
	}
});
