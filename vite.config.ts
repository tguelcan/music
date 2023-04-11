import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Unfonts from 'unplugin-fonts/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Unfonts({
			google: {
				families: ['Playfair Display', 'Poppins']
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		proxy: {
			'/api': {
				target: 'https://api.spotify.com/v1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
