/**
 * Generate Svelte Image compatible set or src data
 * Doc: https://github.com/matyunya/svelte-image
 */
export const generateSrcset = (image) => image.map((img) => `${img.url} ${img.width}w`).toString();
