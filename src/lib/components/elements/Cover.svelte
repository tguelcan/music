<script lang="ts">
	import { generateSrcset } from '$helper';

	$: ({ name, images, artists, id } = $$restProps);
</script>

<div>
	<a href="/album/{id}" class="group space-y-1 relative">
		<div class="w-auto sm:w-36 rounded overflow-hidden relative">
			{#if name} <span class="sr-only">{name}</span>{/if}
			<div
				class="group-hover:bg-primary-light mix-blend-multiply transition-all absolute inset-0"
			/>
			<img alt="Albums" srcset={generateSrcset(images)} />
		</div>
		{#if name}
			<div
				class="absolute bottom-0 bg-white/90 dark:bg-gray-dark/90 sm:relative sm:bg-transparent sm:bottom-0 p-3 sm:p-0 w-full sm:w-36 font-bold truncate text-lg sm:text-sm text-primary-dark dark:text-primary-light group-hover:text-primary transition-all"
			>
				{name}
			</div>
		{/if}
	</a>
	{#each artists as artist}
		<div class="hidden sm:block text-xs">
			<a href="/artist/{artist.id}">{artist.name}</a>
		</div>
	{/each}
</div>
