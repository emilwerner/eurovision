import React from 'react';
import artistHandler from "./../../Classes/ArtistHandler.jsx";
import Note from "./Note.jsx";

export default class ArtistNotes extends React.Component {
    constructor() {
        super();
        this.addNote = (note) => this._addNote(note);
        this.ratingChange = (event) => this._ratingChange(event);
        this.updateNoteText = (event) => this._updateNoteText(event);
    }
    componentDidMount() {
        this.state = {
            artistData: artistHandler.getArtistData(this.props.artist.id),
            rating: 0,
            noteText: ""
        };
    }

    render() {
        return (
            <div className="notes">
                {this.state ?
                    <div>
                        <h3>
                            Betyg: {this.state.artistData.rating / 10}/10
                        </h3>
                        <input type="range" min="0" max="100"
                            value={this.state.artistData.rating}
                            onChange={this.ratingChange} />
                        <h3>
                            Anteckningar
                        </h3>
                        <div className="form-group form-notes">
                            <input className="form-control" type="text" placeholder="Skriv något bra..."
                                value={this.state.noteText}
                                onChange={this.updateNoteText} />
                            <button className="btn" onClick={this.addNote}>Spara</button>
                        </div>
                        <div className="note-container">
                            {this.state ? this.state.artistData.notes.map(note => (
                                <Note key={note} text={note} />
                            )) : null}

                        </div>
                    </div> : null
                }

            </div>
        );
    }

    _addNote(note) {
        if (!this.state.noteText) return;
        const data = artistHandler.addNote(this.props.artist.id, this.state.noteText);
        this.setState({
            artistData: data,
            noteText: ""
        });
    }
    _ratingChange(event) {
        const data = artistHandler.updateRating(this.props.artist.id, event.target.value);
        this.setState({ artistData: data });
    }
    _updateNoteText(event) {
        this.setState({
            noteText: event.target.value
        });
    }
}
