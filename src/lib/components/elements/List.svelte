<script lang="ts">
	import { generateSrcset, convertMilliseconds } from '$helper';
	import { audioTrack } from '$components/player/store';
	export let title: string | null = null;
	export let tracks: object;
	// Remove empty elements from array
	// Some of Spotify Tracklist have empty elements like
	// artist/6UZ0ba50XreR4TM8u322gs
	const allTracks = tracks.filter((n) => n);

	let assignTrack = (track) => {
		if (track.preview_url) {
			$audioTrack = track;
		}
	};
</script>

{#if title}
	<h1 class="title pt-8">{title}</h1>
{/if}
<ul class="divide-y divide-gray dark:divide-primary-dark">
	{#each allTracks as track}
		<li
			class="sm:flex items-top py-4 transition-all p-3 {track.preview_url
				? 'cursor-pointer hover:bg-gray dark:hover:bg-primary-dark'
				: 'cursor-default'}"
			on:mousedown={() => assignTrack(track)}
			aria-label="Play track"
		>
			{#if track?.album}
				<img
					alt="Artist"
					srcset={generateSrcset(track?.album?.images)}
					class="w-10 h-10 object-cover rounded-sm mr-3"
				/>
			{/if}
			<dl class="text-primary-dark dark:text-primary-light">
				<dt class="text-sm font-bold flex items-top">
					{track?.name}
					{#if track.preview_url}
						<i class="gg-music-note ml-2 mt-0.5" style="--ggs: .5;" />{/if}
				</dt>
				{#if track?.artists.length}
					<div class="flex flex-wrap">
						{#each track?.artists as artist}
							<dd class="text-sm font-light space-x-2">
								<a href="/artist/{artist.id}" aria-label="Artist detail page">{artist.name}</a>
							</dd>
						{/each}
					</div>
				{/if}
			</dl>
			{#if track?.duration_ms}
				<div class="mt-2 sm:mt-0 ml-auto text-sm text-primary-dark dark:text-primary-light">
					{convertMilliseconds(track?.duration_ms)}
				</div>
			{/if}
		</li>
	{/each}
</ul>
