import React from 'react';
import artistHandler from "./../../Classes/ArtistHandler.jsx";
import Note from "./Note.jsx";

export default class ArtistNotes extends React.Component {
    constructor() {
        super();
        this.updateNote = (note) => this._updateNotes(note);
    }
    componentDidMount() {
        this.state = { notes: artistHandler.getNotes(this.props.artist.id) };
    }

    render() {
        return (
            <div className="notes">
                <h3>
                    Betyg
                        </h3>
                <p>10/10</p>
                <h3>
                    Anteckningar
                </h3>
                <div>
                    {this.state ? this.state.notes.map(note => (
                        <Note key={this.props.artist.id + note.id} noteItem={note} updateNote={this.updateNote} />
                    )) : null}
                </div>
            </div>
        );
    }

    _updateNotes(note) {
        artistHandler.updateNote(this.props.artist.id, note);
        this.setState({
            notes: artistHandler.getNotes(this.props.artist.id)
        });
    }
}
