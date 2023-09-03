import { sveltekit } from '@sveltejs/kit/vite';
import { build, defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	build: {
		sourcemap: true
	}
});
