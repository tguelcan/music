import type { Handle, HandleFetch } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';
import { dev } from '$app/environment';
import { setLanguage } from '$server/helper';
let cookieName = 'app';

export const handle = (async ({ event, resolve }) => {
	const appToken = event.cookies.get(cookieName);

	/**
	 * Get app access token and set cookie
	 * Doc: https://developer.spotify.com/documentation/web-api/tutorials/getting-started
	 */
	if (!appToken) {
		// Set fetch parameter
		const headers = new Headers();
		const body = new URLSearchParams();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		body.append('grant_type', 'client_credentials');
		body.append('client_id', SPOTIFY_CLIENT_ID);
		body.append('client_secret', SPOTIFY_CLIENT_SECRET);

		// Execute fetch to get client access token
		const response = await fetch('https://accounts.spotify.com/api/token', {
			headers,
			body,
			method: 'POST'
		});
		// Get data from response
		const { access_token, expires_in } = await response.json();

		// Set cookie
		event.cookies.set(cookieName, access_token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: expires_in - 60
		});
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;

export const handleFetch = (({ event, request, fetch, locals }) => {
	const appToken = event.cookies.get(cookieName);
	const { pathname } = new URL(request.url);

	// Set authorization header and country code for every api request
	if (pathname?.startsWith('/api') && !!appToken) {
		request = setLanguage(event, request);
		request.headers.set('Authorization', `Bearer ${appToken}`);
	}

	return fetch(request);
}) satisfies HandleFetch;
