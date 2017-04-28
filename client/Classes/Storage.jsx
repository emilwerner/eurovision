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
            artist = { id: artistId, notes: [] };
            this.storageSet(artistName, artist);
        }
        return artist;
    }

    updateArtist(newArtist) {
        const artistName = this.getArtistName(newArtist.id);
        let artist = this.getArtist(newArtist.id);
        artist.rating = newArtist.rating;
        for (note of newArtist.note) {
            var oldNote = artist.find(e => {
                return e.id === note.id;
            });

            if (!oldNote) {
                artist.note.push("yolo");
            }
        }
        this.storageSet(getArtistName(artist.id), artist);
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