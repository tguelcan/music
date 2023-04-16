export const GET = (async (request) => {
	return new Response('Redirect', {
		status: 303,
		headers: {
			'set-cookie': 'app=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
			Location: '/'
		}
	});
}) satisfies RequestHandler;
