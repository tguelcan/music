<script lang="ts">
	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	import PageErrorImage from '../assets/404-error.png';
</script>

<div class="flex items-center justify-center flex-col pt-12 gap-y-3">
	<img class="w-[130px] h-[130px]" src={PageErrorImage} alt="404 page not found" />
	<p class="text-lg">Page not found</p>
	{#if path !== '/'}
		<a
			href="/"
			class="text-xl font-medium tracking-tight ring-2 px-2 py-1 rounded ring-black dark:ring-primary hover:ring-primary"
			>Back to Home</a
		>
	{/if}
</div>
