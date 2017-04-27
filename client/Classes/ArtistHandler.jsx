import noteTypesData from "./../../noteTypes.json";
import storage from "./Storage.jsx";
class ArtistHandler {
    constructor() {
    }

    getNotes(artistId) {
        const artist = storage.getArtist(artistId);
        const storageNotes = artist.notes;
        const notes = JSON.parse(JSON.stringify(noteTypesData.noteTypes));
        for (let i = 0; i < notes.length; i++) {
            const stoNote = storageNotes.find((e) => {
                return e.id === notes[i].id;
            });

            if (stoNote) {
                notes[i].isChecked = stoNote.isChecked;
            } else {
                notes[i].isChecked = false;
            }
        }
        (notes);
        return notes;
    }

    updateNote(artistId, note) {
        storage.updateNote(artistId, note);
        return this.getNotes(artistId);
    }
}

export default new ArtistHandler();