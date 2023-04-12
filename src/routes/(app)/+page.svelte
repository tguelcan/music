<script lang="ts">
	import type { PageData } from './$types';
	import Cover from '$components/elements/Cover.svelte';

	export let data: PageData;

	$: ({ NewAlbums } = data);
</script>

<div class="container my-4">
	<h1>New album releases</h1>
	<div class="flex flex-wrap gap-2 mt-4">
		{#each NewAlbums.albums.items as item}
			<Cover {...item} />
		{/each}
	</div>
</div>
