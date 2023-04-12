<script lang="ts">
	import type { PageData } from './$types';
	import { animate, scroll } from 'motion';
	import { generateSrcset } from '$helper';
	import { onMount } from 'svelte';
	export let data: PageData;

	onMount(() => {
		document.querySelectorAll('section').forEach((section) => {
			const header = section.querySelector('h2');
			scroll(animate(header, { y: [-400, 400] }), {
				target: header
			});
		});
	});

	$: ({ albums } = data);

	console.log(data);
</script>

<main class="container snap-y snap-mandatory h-screen overflow-y-scroll">
	{#each albums.items as { name, images }}
		<section>
			<div>
				<h2>{name}</h2>
				<img alt="Albums" srcset={generateSrcset(images)} />
			</div>
		</section>
	{/each}
</main>

<style>
	h2 {
		margin: 0;
		color: var(--red);
		font-size: 50px;
		font-weight: 700;
		letter-spacing: -3px;
		line-height: 1.2;
		position: absolute;
		display: inline-block;
		top: calc(50% - 25px);
		left: calc(50% + 120px);
	}

	section {
		height: 100vh;
		scroll-snap-align: start;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	section > div {
		width: 300px;
		height: 400px;
		margin: 20px;
		background: var(--white);
		overflow: hidden;
	}

	img {
		width: 300px;
		height: 400px;
	}
</style>
