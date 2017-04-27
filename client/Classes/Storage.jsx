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
        if (!artistId) throw "WTF man";
        const artistName = "artist_" + artistId;
        let artist = this.storageGet(artistName);
        if (!artist) {
            artist = { id: artistId, notes: [] };
            this.storageSet(artistName, artist);
        }
        return artist;
    }

    currentUser(name) {
        if (name) {
            this.storageSet(_userName, name);
        }
        else {
            return this.storageGet(_userName);
        }
    }

    updateNote(artistId, note) {
        const artist = this.getArtist(artistId);

        if (note) {
            var storageNote = artist.notes.find(item => {
                return item.id === note.id;
            });

            if (storageNote) {
                storageNote.isChecked = note.isChecked;
            } else {
                artist.notes.push({
                    id: note.id,
                    isChecked: note.isChecked
                });
            }
            this.storageSet("artist_" + artistId, artist);
        }
    }

}

export default new Storage();