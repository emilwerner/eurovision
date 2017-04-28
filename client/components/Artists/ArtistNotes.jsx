import React from 'react';
import artistHandler from "./../../Classes/ArtistHandler.jsx";
import Note from "./Note.jsx";

export default class ArtistNotes extends React.Component {
    constructor() {
        super();
        this.updateNote = (note) => this._updateNotes(note);
        this.ratingChange = (event) => this._ratingChange(event);

    }
    componentDidMount() {
        this.state = { artistData: artistHandler.getArtistData(this.props.artist.id), rating: 0 };
    }

    render() {
        return (
            <div className="notes">
                {this.state ?
                    <div>
                        <h3>
                            Betyg: {this.state.rating / 10}/10
                        </h3>
                        <input type="range" min="1" max="100"
                            value={this.state.rating}
                            onChange={this.ratingChange} />
                        <h3>
                            Anteckningar
                        </h3>
                        <div className="form-group form-notes">
                            <input className="form-control" type="text" />
                            <button className="btn">Spara</button>
                        </div>
                        <div>
                            {this.state ? this.state.artistData.notes.map(note => (
                                <Note key={this.props.artist.id + note.id} noteItem={note} updateNote={this.updateNote} />
                            )) : null}

                        </div>
                    </div> : null
                }

            </div>
        );
    }

    _updateNotes(note) {
        artistHandler.updateNote(this.props.artist.id, note);
        this.setState({
            artistData: artistHandler.getArtistData(this.props.artist.id)
        });
    }
    _ratingChange(event) {
        this.setState({
            rating: event.target.value
        });
    }
}
