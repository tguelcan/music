import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getToken } from '$server';
import { dev } from '$app/environment';

export const GET = (async ({ url, cookies, fetch }) => {
	const code = url.searchParams.get('code');

	const { access_token, refresh_token, expires_in } = await getToken(code);

	cookies.set('app', access_token, {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: !dev,
		maxAge: expires_in * 1000
	});

	throw redirect(301, '/profile');
}) satisfies RequestHandler;
