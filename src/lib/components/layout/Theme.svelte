<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleTheme() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button
	on:click={() => handleTheme()}
	class="hover:text-primary dark:text-primary dark:hover:text-primary-light"
	aria-label="Change dark or light mode"
>
	<i class={darkMode ? 'gg-sun' : 'gg-moon'} />
</button>
