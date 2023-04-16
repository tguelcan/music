// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string;
			user: User;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
