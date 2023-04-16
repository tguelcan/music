<script lang="ts">
	import type { PageData } from './$types';
	import Avatar from '$components/elements/Avatar.svelte';
	export let data: PageData;

	$: ({ user } = data);
</script>

<div class="max-w-sm mx-auto text-center flex flex-col justify-center space-y-4">
	<div class="mx-auto">
		<Avatar {...user} />
	</div>
	<h1>
		{user.display_name}
	</h1>
	<div>
		<a href="/profile/logout" class="btn secondary">Logout</a>
	</div>
</div>
