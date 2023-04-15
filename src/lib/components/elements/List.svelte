<script lang="ts">
	import { generateSrcset, convertMilliseconds } from '$helper';
	import { browser } from '$app/environment';
	export let title: string | null = null;
	export let tracks: object;

	// Remove empty elements from array
	// Some of Spotify Tracklist have empty elements like
	// artist/6UZ0ba50XreR4TM8u322gs
	const allTracks = tracks.filter((n) => n);
	if (browser) {
		document.addEventListener(
			'play',
			function (e) {
				var audios = document.getElementsByTagName('audio');
				for (var i = 0, len = audios.length; i < len; i++) {
					if (audios[i] != e.target) {
						audios[i].pause();
					}
				}
			},
			true
		);
	}
</script>

{#if title}
	<h1 class="title pb-4 pt-8">Popular</h1>
{/if}
<ul class="divide-y divide-gray dark:divide-primary-dark">
	{#each allTracks as track}
		<li class="flex items-top py-4 transition-all hover:bg-gray dark:hover:bg-primary-dark p-3">
			{#if track?.album}
				<img
					alt="Artist"
					srcset={generateSrcset(track?.album?.images)}
					width="100%"
					class="w-10 rounded-sm mr-3"
				/>
			{/if}
			<div class="text-primary-dark dark:text-primary-light">
				<p class="text-sm font-bold">{track?.name}</p>
				{#if track?.artists.length}
					<div class="text-sm font-light flex space-x-2">
						{#each track?.artists as artist, index}
							{artist.name}{track.artists.length !== 1 && index !== track.artists.length - 1
								? ', '
								: ''}
						{/each}
					</div>
				{/if}
			</div>
			{#if track?.duration_ms}
				<div class="ml-auto text-sm text-primary-dark dark:text-primary-light">
					{convertMilliseconds(track?.duration_ms)}
				</div>
			{/if}
		</li>
		{#if track?.preview_url}
			<audio
				id="audio_with_controls"
				controls
				src={track?.preview_url}
				type="audio/mp3"
				class="w-full"
			>
				Your browser cannot play this audio.<br />
				You can find it under
				<a href={track?.href}>this link</a>.
			</audio>
		{/if}
	{/each}
</ul>
