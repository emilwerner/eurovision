import storage from "./Storage.jsx";
class ArtistHandler {
    constructor() {
    }

    getArtistData(artistId) {
        return storage.getArtist(artistId);
    }

    updateNote(artistId, note) {
        storage.updateNote(artistId, note);
        return this.getNotes(artistId);
    }
}

export default new ArtistHandler();