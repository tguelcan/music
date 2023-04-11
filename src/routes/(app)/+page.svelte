<script lang="ts">
	import type { PageData } from './$types';
	import { generateSrcset } from '$helper';

	export let data: PageData;

	$: ({ NewAlbums } = data);
</script>

<h1 class="font-serif text-2xl">New Album Releases</h1>

<div class="flex flex-wrap gap-4">
	{#each NewAlbums.items as { name, images, artists }}
		<div>
			<div class="w-36 rounded-2xl overflow-hidden">
				<img alt="Albums" srcset={generateSrcset(images)} />
			</div>
			<dl>
				<dt class="w-36 font-bold truncate text-primary-dark">{name}</dt>
				{#each artists as artist}
					<dd class="text-sm">{artist.name}</dd>
				{/each}
			</dl>
		</div>
	{/each}
</div>
