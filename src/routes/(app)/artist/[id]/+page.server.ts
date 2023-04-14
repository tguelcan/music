import type { PageServerLoad } from './$types';
import { getArtist, getArtistTopTracks, getArtistAlbums, getReleatedArtists } from '$server';

export const load = (async ({ fetch, params }) => ({
	artist: getArtist(fetch, params.id),
	topTracks: getArtistTopTracks(fetch, params.id),
	albums: getArtistAlbums(fetch, params.id, 10),
	releatedArtists: getReleatedArtists(fetch, params.id)
})) satisfies PageServerLoad;
