<script lang="ts">
	import { generateSrcset } from '$helper';

	import type { PageData } from './$types';
	import Cover from '$components/elements/Cover.svelte';
	import Back from '$components/elements/Back.svelte';

	export let data: PageData;

	$: ({ albums, artist } = data);
</script>

<img
	alt="Artist"
	srcset={generateSrcset(artist.images)}
	width="100%"
	class="inset-0 -z-10 h-full w-full object-cover object-center fixed"
/>
<div
	class="inset-0 -z-10 h-full w-full object-cover object-center fixed bg-gray-light/60 dark:bg-gray-dark/80"
/>

<div class="container my-4 space-y-4" id="albums">
	<Back />
	<h1>Albums of {artist.name}</h1>
	<div class="flex flex-wrap gap-2 mt-4">
		{#each albums.items as item}
			<Cover {...item} />
		{/each}
	</div>
</div>
