import storage from "./Storage.jsx";
class ArtistHandler {
    constructor() {
    }

    getArtistData(artistId) {
        return storage.getArtist(artistId);
    }

    addNote(artistId, note) {
        return storage.addNote(artistId, note);
    }

    updateRating(artistId, rating) {
        return storage.updateRating(artistId, rating);
    }
}

export default new ArtistHandler();