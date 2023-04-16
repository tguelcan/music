<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { errorHandler } from '$helper';
	import Cover from '$components/elements/Cover.svelte';
	import Artist from '$components/elements/Artist.svelte';

	export let form: ActionData;
	let group = 'artist';
</script>

<div class="container">
	<div class="max-w-md">
		<form method="POST" use:enhance class="space-y-2">
			<div>
				<label for="search" class="sr-only">Search</label>
				<input id="search" type="text" class="form-input" placeholder="Search Artist" name="q" />
				{#if errorHandler(form, 'q')}
					{#each form.errors['q'] as message}
						<small class="text-primary">{message}</small>
					{/each}
				{/if}
			</div>
			<div class="flex space-x-2">
				<div>
					<input
						class="sr-only peer"
						type="radio"
						value="artist"
						name="qType"
						id="type_artist"
						bind:group
					/>
					<label class="pill primary md checkable" for="type_artist">Artist</label>
				</div>
				<div>
					<input class="sr-only peer" type="radio" value="album" name="qType" id="type_album" />
					<label class="pill primary md checkable" for="type_album">Album</label>
				</div>
			</div>
			<div>
				{#if errorHandler(form, 'qType')}
					{#each form.errors['qType'] as message}
						<small class="text-primary">{message}</small>
					{/each}
				{/if}
			</div>
		</form>
	</div>
</div>

{#if form?.artists}
	<div class="container bg-primary-dark p-8 mt-4 md:rounded">
		<h1 class="title text-gray-light">Artists</h1>
		<div class="flex flex-wrap gap-4 sm:gap-7 justify-start">
			{#each form.artists.items as releatedArtist}
				<Artist {...releatedArtist} />
			{/each}
		</div>
	</div>
{/if}
{#if form?.albums}
	<div class="container mt-4">
		<h1 class="title my-4">Albums</h1>
		<div class="wrapper-cover">
			{#each form.albums.items as album}
				<Cover {...album} />
			{/each}
		</div>
	</div>
{/if}
