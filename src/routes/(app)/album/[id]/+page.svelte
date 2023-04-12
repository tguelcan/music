<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$components/elements/Header.svelte';

	export let data: PageData;

	$: ({ album } = data);
</script>

<Header name={album.name} artists={album.artists} genres={album.genres} images={album.images} />

<pre>{JSON.stringify(album, 0, 1)}</pre>
