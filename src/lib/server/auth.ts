import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

const redirect_uri = 'http://localhost:5173/callback';

export const getToken = async (code?: string) => {
	const headers = new Headers();
	const urlencoded = new URLSearchParams();
	const body = new URLSearchParams();

	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	body.append('grant_type', 'client_credentials');
	body.append('client_id', SPOTIFY_CLIENT_ID);
	body.append('client_secret', SPOTIFY_CLIENT_SECRET);

	if (code) {
		headers.append(
			'Authorization',
			'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
		);
		urlencoded.append('code', code);
		urlencoded.append('redirect_uri', redirect_uri);
		urlencoded.append('grant_type', 'authorization_code');
	}

	// Execute fetch to get client access token
	const response = await fetch('https://accounts.spotify.com/api/token', {
		headers,
		body: code ? urlencoded : body,
		method: 'POST'
	});
	// Get data from response
	return response.json();
};
