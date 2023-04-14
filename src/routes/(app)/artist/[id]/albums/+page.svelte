<script lang="ts">
	import type { PageData } from './$types';
	import Cover from '$components/elements/Cover.svelte';
	import Back from '$components/elements/Back.svelte';

	export let data: PageData;

	$: ({ albums, artist } = data);
</script>

<div class="container py-4 space-y-4">
	<Back />
	<h1>Albums of {artist.name}</h1>
	<div class="flex flex-wrap gap-2 mt-4">
		{#each albums.items as item}
			<Cover {...item} />
		{/each}
	</div>
</div>
