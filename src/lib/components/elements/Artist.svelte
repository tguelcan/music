<script lang="ts">
	import { generateSrcset } from '$helper';

	$: ({ name, images, id } = $$restProps);
</script>

<a href="/artist/{id}" class="group space-y-1 relative" aria-label="Artist detail page">
	<div class="relative">
		<span class="sr-only">{name}</span>
		<div
			class="group-hover:bg-primary-light mix-blend-multiply transition-all absolute inset-0 rounded-full"
		/>
		{#if images.length}
			<img
				alt="Albums"
				srcset={generateSrcset(images)}
				class="object-cover w-32 h-32 rounded-full"
			/>
		{:else}
			<div
				class="w-32 h-32 bg-primary rounded-full flex justify-center items-center text-4xl text-white/70 font-bold"
			>
				{name.match(/\S+/gi)[0].substring(0, 1)}
			</div>
		{/if}
	</div>
	<div class="text-center text-gray group-hover:text-gray-light truncate w-32 font-bold text-sm">
		{name}
	</div>
</a>
