export * from './services';

export const setLanguage = (event, request) => {
	let lang = event.request.headers.get('accept-language')?.split(',')[0]?.trim()?.slice(0, 2);

	// spotify does not know a language code 'en'. Create fallback for this.
	// Doc: https://gist.github.com/frankkienl/a594807bf0dcd23fdb1b
	if (lang == 'en') {
		lang = 'GB';
	}

	// Add country code to end of the url
	const url = new URL(request.url);
	url.searchParams.append('country', lang?.toUpperCase() || 'US');

	return new Request(url);
};
