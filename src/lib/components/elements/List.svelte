<script lang="ts">
	import { generateSrcset, convertMilliseconds } from '$helper';

	export let title: string | null = null;
	export let tracks: object;
</script>

{#if title}
	<h1 class="title pb-4 pt-8">Popular</h1>
{/if}
<ul class="divide-y divide-gray dark:divide-primary-dark">
	{#each tracks as track}
		<li class="flex items-top py-4 transition-all hover:bg-gray dark:hover:bg-primary-dark p-3">
			{#if track.album?.images}
				<img
					alt="Artist"
					srcset={generateSrcset(track.album.images)}
					width="100%"
					class="w-10 rounded-sm mr-3"
				/>
			{/if}
			<div class="text-primary-dark dark:text-primary-light">
				<p class="text-sm font-bold">{track.name}</p>
				<div class="text-sm font-light flex space-x-2">
					{#each track.artists as artist, index}
						{artist.name}{track.artists.length !== 1 && index !== track.artists.length - 1
							? ', '
							: ''}
					{/each}
				</div>
			</div>
			<div class="ml-auto text-sm text-primary-dark dark:text-primary-light">
				{convertMilliseconds(track.duration_ms)}
			</div>
		</li>
	{/each}
</ul>
