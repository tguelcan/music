<script lang="ts">
	import { generateSrcset } from '$helper';

	$: ({ display_name, images } = $$restProps);
</script>

<div class="mt-2">
	<span class="sr-only">{display_name}</span>
	{#if images.length}
		<img
			alt={display_name}
			srcset={generateSrcset(images)}
			class="object-cover w-32 h-32 rounded-full ring-primary-light ring-2"
		/>
	{:else}
		<div
			class="w-32 h-32 bg-primary rounded-full flex justify-center items-center text-4xl text-white/70 font-bold"
		>
			{display_name.match(/\S+/gi)[0].substring(0, 1)}
		</div>
	{/if}
</div>
