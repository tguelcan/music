import type { PageServerLoad } from './$types';
import { getNewReleases } from '$server';

export const load = (({ fetch }) => ({
	newAlbums: getNewReleases(fetch)
})) satisfies PageServerLoad;
