<script lang="ts">
	import type { PageData } from './$types';
	import { generateSrcset } from '$helper';

	export let data: PageData;

	$: ({ NewAlbums } = data);
</script>

<div class="container my-4">
	<h1>New Album Releases</h1>

	<div class="flex flex-wrap gap-4 mt-4">
		{#each NewAlbums.items as { name, images, artists }}
			<div>
				<a href="/" class="group">
					<div class="w-36 rounded-2xl overflow-hidden relative">
						<span class="sr-only">{name}</span>
						<div
							class="group-hover:bg-primary mix-blend-multiply group-hover:mix-blend-multiply transition-all absolute inset-0"
						/>
						<img alt="Albums" srcset={generateSrcset(images)} />
					</div>
					<div
						class="w-36 font-bold truncate text-primary-dark dark:text-primary-light group-hover:text-primary transition-all"
					>
						{name}
					</div>
				</a>
				{#each artists as artist}
					<div class="text-sm"><a href="/">{artist.name}</a></div>
				{/each}
			</div>
		{/each}
	</div>
</div>
