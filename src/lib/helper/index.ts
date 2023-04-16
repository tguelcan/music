/**
 * Generate responsive image set (srcset) data
 * Doc: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#how_do_you_create_responsive_images
 */
export const generateSrcset = (image) =>
	image && image.map((img) => `${img.url} ${img.width}w`).toString();

// Convert milliseconds to tade and trim (simple way)
export const convertMilliseconds = (ms) => new Date(ms).toISOString().slice(14, 19);

// Get year from date
export const transformDate = (date) => {
	const d = new Date(date);
	return {
		year: d.getFullYear()
	};
};

export const errorHandler = (form: any, key: string) => form?.error && form?.errors[key];

export const removeEmptyElements = (items: object[]) => items.filter((n: any) => n);
