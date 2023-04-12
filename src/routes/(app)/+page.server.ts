import type { PageServerLoad } from './$types';
import { getNewReleases } from '$server';

export const load = (({ fetch }) => ({
	NewAlbums: getNewReleases(fetch)
})) satisfies PageServerLoad;
