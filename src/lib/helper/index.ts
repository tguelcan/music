/**
 * Generate responsive image set (srcset) data
 * Doc: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#how_do_you_create_responsive_images
 */
export const generateSrcset = (image: object[]) =>
	image &&
	image.map((img: any) => (img?.width ? `${img.url} ${img.width}w` : `${img.url}`)).toString();

// Convert milliseconds to tade and trim (simple way)
export const convertMilliseconds = (ms: number) => new Date(ms).toISOString().slice(14, 19);

// Get year from date
export const transformDate = (date: Date | string) => {
	const d = new Date(date);
	return {
		year: d.getFullYear()
	};
};

export const errorHandler = (form: any, key: string) => form?.error && form?.errors[key];

export const removeEmptyElements = (items: object[] | any) => items.filter((n: any) => n);
