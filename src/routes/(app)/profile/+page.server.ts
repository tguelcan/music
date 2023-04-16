import { SPOTIFY_CLIENT_ID } from '$env/static/private';
import { json, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getMe } from '$server';

const redirect_uri = `${process.env.VERCEL_URL}/callback` || 'http://localhost:5173/callback';

export const load = (async ({ fetch }) => {
	const user = await getMe(fetch);

	if (!user.error) {
		return { user };
	}

	var scope = 'user-read-private user-read-email';

	const urlParams = new URLSearchParams({
		response_type: 'code',
		client_id: SPOTIFY_CLIENT_ID,
		scope: scope,
		redirect_uri: redirect_uri
	}).toString();

	throw redirect(302, 'https://accounts.spotify.com/authorize?' + urlParams);
}) satisfies PageServerLoad;
