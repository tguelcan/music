<script lang="ts">
	import '../app.scss';
	import type { LayoutData } from './$types';
	import SlectTheme from '$components/layout/Theme.svelte';
	import NativePlayer from '$components/player/NativePlayer.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	export let data: LayoutData;

	/**
	 * Store user
	 * Doc: https://kit.svelte.dev/docs/state-management#using-stores-with-context
	 */
	// Create a store and update it when necessary...
	const user = writable();
	$: user.set(data?.user || {});
	// ...and add it to the context for child components to access
	setContext('user', user);
</script>

<div class="flex flex-col h-screen">
	<div class="py-5 bg-gray-light dark:bg-gray-dark fixed inset-x-0 z-50">
		<div class="container flex items-center justify-between">
			<a
				href="/"
				class="text-2xl font-extrabold tracking-tight ring-2 px-2 py-1 ring-black dark:ring-primary hover:ring-primary"
				>MUSIC</a
			>
			<div class="flex items-center space-x-4 sm:space-x-6">
				<a href="/search" aria-label="Music Search"><i class="gg-search" /></a>
				<SlectTheme />
			</div>
		</div>
	</div>
	<div class="flex-grow mt-20"><slot /></div>
	<div class="bg-primary-dark text-gray-light">
		<div class="container sm:flex text-center sm:text-left justify-between pb-8 pt-4">
			<div class="text-sm">
				<a href="https://kit.svelte.dev/" target="_blank" class="text-primary-light font-semibold"
					>SvelteKit</a
				>
				MUSIC app by
				<a
					href="https://twitter.com/Tayfuuu"
					target="_blank"
					class="text-primary-light font-semibold">tayfuuu</a
				>
			</div>

			<div class="flex justify-center sm:justify-start mt-6 sm:mt-0 space-x-4">
				<a
					href="https://github.com/tguelcan/music"
					target="_blank"
					aria-label="GitHub repository"
					class="text-primary-light hover:text-primary"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
						><path
							d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
						/></svg
					></a
				>
				<a
					href="https://developer.spotify.com/"
					target="_blank"
					class="opacity-70 hover:opacity-40 dark:hover:opacity-100"
				>
					<img src="/spotify.svg" alt="Spotify" class="w-20" />
				</a>
			</div>
		</div>
	</div>
</div>
<div class="fixed z-20 bottom-0 inset-x-0">
	<NativePlayer />
</div>
