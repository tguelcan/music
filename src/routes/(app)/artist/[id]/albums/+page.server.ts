import type { PageServerLoad } from './$types';
import { getArtistAlbums } from '$server';

export const load = (async ({ fetch, params }) => ({
	albums: getArtistAlbums(fetch, params.id)
})) satisfies PageServerLoad;
