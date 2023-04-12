import type { PageServerLoad } from './$types';
import { getAlbum } from '$server';

export const load = (async ({ fetch, params }) => ({
	album: getAlbum(fetch, params.id)
})) satisfies PageServerLoad;
