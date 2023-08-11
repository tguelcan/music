import { fail } from '@sveltejs/kit';
export * from './services';
export * from './auth';

export const setLanguage = (event:any, request:any) => {
	let lang = event.request.headers.get('accept-language')?.split(',')[0]?.trim()?.slice(0, 2);

	// spotify does not know a country code 'en'. Create fallback for this.
	// Doc: https://gist.github.com/frankkienl/a594807bf0dcd23fdb1b
	if (lang == 'en') {
		lang = 'GB';
	}

	// Add country code to end of the url
	const url = new URL(request.url);
	url.searchParams.append('country', lang?.toUpperCase() || 'US');

	return new Request(url);
};

type ResponserSchema = {
	/**
	 * Response data if success
	 */
	data?: object;
	/**
	 * If form validation successful passed
	 */
	success?: boolean;
	/**
	 * If form validation not successful passed
	 */
	error?: boolean;
	/**
	 * List of valiadtion errors as array
	 */
	errors?: object[];
};

export const validateForm = (schema: any, formData: object) =>
	new Promise<{[x:string]:any}>((resolve, reject) => {
		const result = schema.safeParse(formData);
		if (result.success) {
			return resolve(result);
		} else {
			const data: ResponserSchema = {
				error: true,
				errors: result.error.flatten().fieldErrors
			};
			return reject(fail(400, data));
		}
	});
