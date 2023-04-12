<script lang="ts">
	import type { PageData } from './$types';
	import { generateSrcset, convertMilliseconds } from '$helper';
	import Cover from '$components/elements/Cover.svelte';
	import Header from '$components/elements/Header.svelte';

	export let data: PageData;

	$: ({ artist, topTracks, albums } = data);
</script>

<Header name={artist.name} genres={artist.genres} images={artist.images} />

<!-- Top tracks -->
<div class="container">
	<h1 class="my-4">Popular</h1>
	<ul class="divide-y divide-gray dark:divide-primary-dark">
		{#each topTracks.tracks as track}
			<li class="flex items-top py-4 transition-all hover:bg-gray dark:hover:bg-primary-dark p-3">
				<img
					alt="Artist"
					srcset={generateSrcset(track.album.images)}
					width="100%"
					class="w-10 rounded-sm"
				/>

				<div class="ml-3 text-primary-dark dark:text-primary-light">
					<p class="text-sm font-bold">{track.name}</p>
					<p class="text-sm font-light">
						{track.album.name}
					</p>
				</div>
				<div class="ml-auto text-sm text-primary-dark dark:text-primary-light">
					{convertMilliseconds(track.duration_ms)}
				</div>
			</li>
		{/each}
	</ul>
</div>

<!-- Albums -->
<div class="container">
	<h1 class="my-4">Albums</h1>
	<div class="flex flex-wrap gap-2">
		{#each albums.items as album}
			<Cover {...album} />
		{/each}
	</div>
</div>
