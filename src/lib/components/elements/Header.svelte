<script lang="ts">
	import { generateSrcset, transformDate } from '$helper';
	import Back from '$components/elements/Back.svelte';
	$: ({ name, images, artists, genres, release_date } = $$restProps);
</script>

<div class="relative isolate overflow-hidden pt-8 z-0">
	<div class="container relative z-20">
		<Back />
	</div>
	<img
		alt="Artist"
		srcset={generateSrcset(images)}
		width="100%"
		class="fixed inset-0 -z-10 h-80 w-full object-cover object-center"
	/>
	<div class="fixed h-80 bg-primary-dark/70 inset-0 z-0" />

	<div class="container relative z-20 pt-8 sm:pt-16 md:pt-24 pb-8">
		<div>
			<h1 class="text-4xl text-primary-light sm:text-6xl">
				{name}
			</h1>
			{#if artists && artists.length}
				<div class="mt-2 flex flex-wrap gap-2 max-w-md text-primary-light text-lg sm:text-xl">
					{#if release_date} {transformDate(release_date).year} - {/if}
					{#each artists as artist}
						{artist.name}
					{/each}
				</div>
			{/if}

			{#if genres.length}
				<div class="mt-4 flex flex-wrap gap-2 max-w-md">
					{#each genres as genre}
						<div class="pill">
							{genre}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
