import { defineStore } from 'pinia'

export const useSongStore = defineStore('SongStore', {
    state: () => ({
        thumbnail: null as string | null,
        owner: null as string | null,
        title: null as string | null,
        duration: null as string | null,
        track_id: null as string | null,
        artists: null as Array<[]> | null,
    }),
    persist: true,
    actions: {
        setSongDetails(thumbnail:string, owner:string, title:string, duration:string, track_id:string, artists:Array<[]>) {
            this.thumbnail = thumbnail
            this.title = title
            this.owner = owner
            this.duration = duration
            this.track_id = track_id
            this.artists = artists
        },
        removeSongDetails() {
            this.thumbnail = null
            this.owner = null
            this.duration = null
            this.track_id = null
            this.artists = null
        }
    }
})