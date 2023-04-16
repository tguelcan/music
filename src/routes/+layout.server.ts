import type { LayoutServerLoad } from './$types';
import { getMe } from '$server';

export const load = (async ({ fetch, cookies }) => {
	const token = await cookies.get('app');

	if (token) {
		const user = await getMe(fetch);

		if (!user.error) {
			return { user };
		}
	}

	return { user: null };
}) satisfies LayoutServerLoad;
