<script lang="ts">
	import Cover from '$components/elements/Cover.svelte';
	import Coverage from '$components/elements/Coverage.svelte';

	interface albumFrame {
		newAlbums: { [x:string] : any }
	}

	export let data: albumFrame;

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
