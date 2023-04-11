import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch, locals }) => {
	const { lang } = locals;
	const newReleasesResponse = await fetch(`/api/browse/new-releases?country=${lang}`);

	let newReleases = await newReleasesResponse.json();

	console.log(newReleases);
	return {
		newReleases
	};
}) satisfies PageServerLoad;
