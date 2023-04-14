<script lang="ts">
	import type { PageData } from './$types';
	import Cover from '$components/elements/Cover.svelte';
	import Artist from '$components/elements/Artist.svelte';
	import Header from '$components/elements/Header.svelte';
	import List from '$components/elements/List.svelte';

	export let data: PageData;

	$: ({ artist, topTracks, albums, releatedArtists } = data);
</script>

<Header name={artist.name} genres={artist.genres} images={artist.images} />

<div class="wrapper">
	<div class="container">
		<List title="Popular" tracks={topTracks.tracks} />
	</div>

	<div class="container">
		<h1 class="my-4">Albums</h1>
		<div class="flex flex-wrap gap-2">
			{#each albums.items as album}
				<Cover {...album} />
			{/each}
		</div>
		<div class="flex justify-center mt-4">
			<a href="/artist/{artist.id}/albums" class="btn secondary">
				<span class="sr-only">show all</span>
				Show all albums
			</a>
		</div>
	</div>

	<div class="bg-primary-dark p-8 mt-8">
		<div class="container">
			<h1 class="text-gray-light mb-8">Releated Artists</h1>
			<div class="flex flex-wrap gap-4 sm:gap-7 justify-start">
				{#each releatedArtists.artists as releatedArtist}
					<Artist {...releatedArtist} />
				{/each}
			</div>
		</div>
	</div>
</div>
