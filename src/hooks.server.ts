import type { Handle, HandleFetch } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { setLanguage, getToken } from '$server';
let cookieName = 'app';

export const handle = (async ({ event, resolve }) => {
	const appToken = event.cookies.get(cookieName);

	/**
	 * Get app access token and set cookie
	 * Doc: https://developer.spotify.com/documentation/web-api/tutorials/getting-started
	 */
	if (!appToken) {
		// Get data from response
		const { access_token, expires_in } = await getToken();

		// Set cookie
		event.cookies.set(cookieName, access_token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: expires_in * 1000
		});
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;

export const handleFetch = (({ event, request, fetch }) => {
	const appToken = event.cookies.get(cookieName);
	const { pathname } = new URL(request.url);

	// Set authorization header and country code for every api request
	if (pathname?.startsWith('/api') && !!appToken) {
		request = setLanguage(event, request);
		request.headers.set('Authorization', `Bearer ${appToken}`);
	}

	return fetch(request);
}) satisfies HandleFetch;
