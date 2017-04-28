import React from 'react';
import Card from './../Card/Card.jsx'
import ArtistNotes from "./ArtistNotes.jsx"
import ArtistPresentation from "./ArtistPresentation.jsx"


export default class Artist extends React.Component {
    constructor() {
        super();
        this.state = { isFocus: false };
        this.setFocus = () => this._setFocus();
        this.stopFocus = () => this._stopFocus();
    }

    render() {
        return (
            <div onClick={this.setFocus}
                className={this.state.isFocus ? 'isFocus' : null}
                ref="container">
                <Card>
                    <ArtistPresentation artist={this.props.artist} />
                    <ArtistNotes artist={this.props.artist} />
                    <div className="exitBar">
                        <div onClick={this.stopFocus}>
                            <i className="material-icons">
                                highlight_off
                            </i>
                        </div>
                    </div>
                </Card>
            </div>);
    }

    _setFocus() {
        if (!this.state.isFocus) {
            this.setState({ isFocus: true });
        }
    }
    _stopFocus() {
        this.setState({ isFocus: false });
        // this.refs.container.scrollIntoView();
    }
}
