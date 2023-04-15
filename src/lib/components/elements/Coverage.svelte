<script lang="ts">
	import { generateSrcset } from '$helper';

	export let album: object;
</script>

<header class="relative">
	<div
		class="absolute inset-0 bg-gradient-to-tr from-primary-dark to-transparent px-10 pt-24 flex flex-col rounded overflow-hidden"
	>
		<h1 class="text-primary-light dark:text-primary-light">{album.name}</h1>
		{#each album.artists as { id, name }}
			<a href="/artist/{id}" class="text-lg text-gray-light dark:text-gray-light">
				{name}
			</a>
		{/each}
		<div class="mt-4">
			<a href="/album/{album.id}" class="btn primary">Go to Album</a>
		</div>
	</div>
	<img
		alt="Albums"
		srcset={generateSrcset(album.images)}
		class="h-64 w-full object-cover rounded"
	/>
</header>
