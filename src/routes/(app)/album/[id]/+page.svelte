<script lang="ts">
	import type { PageData } from './$types';
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import Header from '$components/elements/Header.svelte';

	export let data: PageData;
	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage || '/';
	});

	$: ({ album } = data);
</script>

<Header
	name={album.name}
	artists={album.artists}
	genres={album.genres}
	images={album.images}
	{previousPage}
/>

<pre>{JSON.stringify(album, 0, 1)}</pre>
