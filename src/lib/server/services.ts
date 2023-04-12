import { error } from '@sveltejs/kit';

interface itemObject {
	json(): object | PromiseLike<object>;
	status: number;
}

/**
 * Global error handler
 * @param items
 * @returns
 */

const errorHandler = async (items: itemObject): Promise<object> => {
	if (items.status !== 200) {
		throw error(items.status);
	}
	return await items.json();
};

/**
 * Doc: https://developer.spotify.com/documentation/web-api/reference/get-new-releases
 * @param fetch
 * @param limit
 * @returns
 */
export const getNewReleases = async (fetch: any, limit: number = 5): Promise<object> => {
	const response = await fetch(`/api/browse/new-releases?limit=${limit}`);
	return errorHandler(response);
};

/**
 * Doc: https://developer.spotify.com/documentation/web-api/reference/get-an-artist
 * @param fetch
 * @param id
 * @returns Artist by id
 */
export const getArtist = async (fetch: any, id: string): Promise<object> => {
	const response = await fetch(`/api/artists/${id}`);
	return errorHandler(response);
};

/**
 * Doc: https://developer.spotify.com/documentation/web-api/reference/get-an-album
 * @param fetch
 * @param id
 * @returns Album by id
 */
export const getAlbum = async (fetch: any, id: string): Promise<object> => {
	const response = await fetch(`/api/albums/${id}`);
	return errorHandler(response);
};

/**
 * Doc: https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
 * @param fetch
 * @param id
 * @returns Top tracks of artist by id
 */
export const getArtistTopTracks = async (fetch: any, id: string): Promise<object> => {
	const response = await fetch(`/api/artists/${id}/top-tracks`);
	const responseData = await errorHandler(response);
	// Show maximum 5 tracks
	responseData.tracks.length = 5;
	return responseData;
};

/**
 * Doc: https://developer.spotify.com/documentation/web-api/reference/get-an-artist
 * @param fetch
 * @param id
 * @returns Artist by id
 */
export const getArtistAlbums = async (
	fetch: any,
	id: string,
	limit: number = 5
): Promise<object> => {
	const response = await fetch(
		`/api/artists/${id}/albums?limit=${limit}&include_groups=album,single,appears_on,compilation`
	);
	const responseData = await errorHandler(response);
	// Remove dublicate albums
	responseData.items = responseData.items.filter(
		(v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
	);
	return responseData;
};
