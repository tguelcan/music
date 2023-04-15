<script lang="ts">
	import type { PageData } from './$types';
	import Cover from '$components/elements/Cover.svelte';
	import Coverage from '$components/elements/Coverage.svelte';

	export let data: PageData;

	$: ({ newAlbums } = data);
</script>

<div class="container my-4 space-y-4">
	<Coverage album={newAlbums.albums.items[0]} />
	<h1>New album releases</h1>
	<div class="wrapper-cover">
		{#each newAlbums.albums.items as item}
			<Cover {...item} />
		{/each}
	</div>
</div>
