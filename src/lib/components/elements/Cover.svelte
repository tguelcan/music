<script lang="ts">
	import { generateSrcset } from '$helper';

	$: ({ name, images, artists, id } = $$restProps);
</script>

<div class="bg-primary-dark dark:bg-primary-light p-3 rounded">
	<a href="/album/{id}" class="group space-y-2 relative">
		<div class="w-auto rounded overflow-hidden relative">
			{#if name} <span class="sr-only">{name}</span>{/if}
			<div
				class="group-hover:bg-primary-light mix-blend-multiply transition-all absolute inset-0"
			/>
			<img alt="Albums" srcset={generateSrcset(images)} />
		</div>
		{#if name}
			<div class="relative truncate w-32 xs:w-48 sm:w-32 font-bold text-sm text-inverse">
				{name}
			</div>
		{/if}
	</a>
	{#each artists as artist}
		<div class="text-md sm:text-xs">
			<a class="text-inverse" href="/artist/{artist.id}">{artist.name}</a>
		</div>
	{/each}
</div>
