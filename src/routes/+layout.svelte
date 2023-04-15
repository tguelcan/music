<script>
	import '../app.scss';
	import SlectTheme from '$components/layout/Theme.svelte';
</script>

<div class="flex flex-col h-screen">
	<div class="">header</div>
	<div class="flex-grow"><slot /></div>
	<div class="bg-primary-dark">
		<SlectTheme />
	</div>
</div>
