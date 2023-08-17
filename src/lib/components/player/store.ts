import { writable } from 'svelte/store';
export interface Track {
    preview_url: string,
    artists: {[x:string]:any}[],
    duration_ms:string,
    name:string,
    album:{images:string | any}
}


export const audioTrack = writable<Track | null>(null);
