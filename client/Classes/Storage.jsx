const _userName = "userName";
const _notes = "notes";

class Storage {
    constructor() {
    }

    storageGet(name) {
        return JSON.parse(localStorage.getItem(name));
    }

    storageSet(name, obj) {
        localStorage.setItem(name, JSON.stringify(obj));
    }

    getArtist(artistId) {
        const artistName = this.getArtistName(artistId)
        let artist = this.storageGet(artistName);
        if (!artist) {
            artist = { id: artistId, notes: [], rating: 0 };
            this.storageSet(artistName, artist);
        }
        return artist;
    }

    updateRating(artistId, rating) {
        const artist = this.getArtist(artistId);
        artist.rating = rating;
        this.storageSet(this.getArtistName(artist.id), artist);
        return artist;
    }

    addNote(artistId, note) {
        let artist = this.getArtist(artistId);
        artist.notes.push(note);
        this.storageSet(this.getArtistName(artist.id), artist);
        return artist;
    }

    getArtistName(artistId) {
        if (!artistId) throw "WTF man";
        return "artist_" + artistId;
    }

    currentUser(name) {
        if (name) {
            this.storageSet(_userName, name);
        }
        else {
            return this.storageGet(_userName);
        }
    }
}

export default new Storage();