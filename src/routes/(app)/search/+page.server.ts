import type { Actions } from './$types';
import z from 'zod';
import { zfd } from 'zod-form-data';
import { validateForm } from '$server';
import { search } from '$server';

const schema = zfd.formData({
	q: zfd.text(z.string().min(1, { message: 'Search a required' }).max(50)),
	qType: zfd.text(
		z.enum(['artist', 'album'], {
			invalid_type_error: 'Select a type'
		})
	)
});

export const actions = {
	default: async ({ fetch, request }) => {
		try {
			/**
			 * Get data
			 */
			const data = await request.formData();
			/**
			 * Validate data
			 */
			const validatedData = await validateForm(schema, data);
			const response = await search(fetch, validatedData.data);
			/**
			 * Return data
			 */
			return response;
		} catch (error: any) {
			/**
			 * Response error
			 */
			return error;
		}
	}
} satisfies Actions;
