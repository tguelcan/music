<script lang="ts">
	import { fly } from 'svelte/transition';
	import { generateSrcset } from '$helper';
	import { audioTrack } from '$components/player/store';

	let audio: any;
	let paused: boolean = false;
	let currentTime: any;
	let duration: any;
</script>

{#if $audioTrack}
	<audio
		id="audio"
		src={$audioTrack?.preview_url}
		bind:this={audio}
		autoplay={true}
		bind:paused
		bind:currentTime
		bind:duration
		on:ended={() => ($audioTrack = null)}
	/>
	<div
		transition:fly={{ y: 60 }}
		class="bg-gray/80 dark:bg-primary-dark/80 w-full backdrop-blur-md border-t border-white/10"
	>
		<div class="w-full bg-primary-light rounded-sm h-1">
			<div
				class="bg-primary h-1 rounded-sm transition-all duration-75"
				style="width: {(currentTime * 100) / duration}%"
			/>
		</div>

		<div class="container py-4">
			<div class="flex space-x-2">
				<div class="hidden sm:flex shrink-0">
					{#if $audioTrack?.album?.images}
						<img
							alt="Albums"
							srcset={generateSrcset($audioTrack?.album.images)}
							class="w-14 h-14 object-cover rounded"
						/>
					{:else}
						<div class="w-14 h-14 shrink-0" />
					{/if}

					<div class="w-14 h-14 absolute bg-primary-dark/50 overflow-hidden rounded" />

					<button
						type="button"
						class="absolute w-14 h-14 flex justify-center items-center text-gray-light z-20 drop-shadow"
						aria-label="Pause"
						on:click={() => (paused ? audio.play() : audio.pause())}
					>
						{#if paused}
							<i class="gg-play-button" style="--ggs: 1.2;" />
						{:else}
							<i class="gg-play-pause" style="--ggs: 1.2;" />
						{/if}
					</button>
				</div>

				<div class="flex flex-row-reverse w-full">
					<div class="flex items-start justify-end">
						<button class="float-right text-primary" on:click={() => ($audioTrack = null)}
							><i class="gg-close" /></button
						>
					</div>
					<dl class="w-full text-primary-dark dark:text-primary-light">
						<dt class="text-xs sm:text-sm font-bold truncate w-full">{$audioTrack?.name}</dt>
						{#if $audioTrack?.artists.length}
							<div class="flex flex-wrap">
								{#each $audioTrack?.artists as artist}
									<dd class="text-xs sm:text-sm font-light space-x-2">
										<a href="/artist/{artist.id}">{artist.name}</a>
									</dd>
								{/each}
							</div>
						{/if}
					</dl>
				</div>
			</div>
		</div>
	</div>
{/if}
