<script lang="ts">
	import { preview_url } from '$components/player/store';
</script>

{#if $preview_url}
	<audio id="audio_with_controls" controls src={$preview_url} class="w-full" autoplay={true} />
{/if}
