import type { PageServerLoad } from './$types';
import { getArtist, getArtistTopTracks, getArtistAlbums } from '$server';

export const load = (async ({ fetch, params }) => ({
	artist: getArtist(fetch, params.id),
	topTracks: getArtistTopTracks(fetch, params.id),
	albums: getArtistAlbums(fetch, params.id, 9)
})) satisfies PageServerLoad;
