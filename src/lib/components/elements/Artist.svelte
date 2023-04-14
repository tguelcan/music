<script lang="ts">
	import { generateSrcset } from '$helper';

	$: ({ name, images, id } = $$restProps);
</script>

<a href="/artist/{id}" class="group space-y-1 relative">
	<div class="relative">
		<span class="sr-only">{name}</span>
		<div
			class="group-hover:bg-primary-light mix-blend-multiply transition-all absolute inset-0 rounded-full"
		/>
		<img alt="Albums" srcset={generateSrcset(images)} class="object-cover w-32 h-32 rounded-full" />
	</div>
	<div class="text-center text-gray group-hover:text-gray-light truncate w-32 font-bold text-sm">
		{name}
	</div>
</a>
