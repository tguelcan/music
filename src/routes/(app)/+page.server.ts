import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch, locals }) => {
	const newReleasesResponse = await fetch(`/api/browse/new-releases`);

	let NewReleases = await newReleasesResponse.json();

	// console.log(NewReleases.albums.items[0]);
	return {
		NewAlbums: NewReleases.albums
	};
}) satisfies PageServerLoad;
