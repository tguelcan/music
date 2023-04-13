<script lang="ts">
	import { generateSrcset } from '$helper';
	import Back from '$components/elements/Back.svelte';
	$: ({ name, images, artists, genres } = $$restProps);
</script>

<div class="relative isolate overflow-hidden pt-8">
	<div class="container relative z-20">
		<Back />
	</div>
	<img
		alt="Artist"
		srcset={generateSrcset(images)}
		width="100%"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
	/>

	<div class="container relative z-20 py-8 sm:py-16 md:py-28">
		<div>
			<h1 class="text-4xl text-primary-light sm:text-6xl">
				{name}
			</h1>
			{#if artists && artists.length}
				<div class="mt-2 flex flex-wrap gap-2 max-w-md text-primary-light text-lg sm:text-xl">
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
	<div class="bg-primary-dark/70 inset-0 absolute z-0" />
</div>
