import React from 'react';
import Event from './../../Classes/Event.jsx';
import Storage from './../../Classes/Storage.jsx';
import Card from './../Card/Card.jsx';
import ArtistSelector from './ArtistSelector.jsx';


export default class Note extends React.Component {
    constructor() {
        super();
        this.artistChange = () => this._artistChange();
        this.state = { vote: Storage.getVote() };
    }

    render() {
        return (
            <div>
                <div className="btn-vote-wrapper">
                    <div className="btn btn-default btn-vote-2" onClick={() => { Event.trigger("voteView") }} >
                        Tillbaka
                 </div>
                    <div className="btn btn-primary btn-vote-2" onClick={() => { Event.trigger("voteView") }} >
                        Rösta
                 </div>
                </div>
                {this.getPoints().map(point => (
                    <Card key={point.value}>
                        <ArtistSelector point={point} onArtistChange={this.artistChange} />
                    </Card>
                ))
                }
            </div >
        );
    }
    _artistChange() {

    }

    getPoints() {
        return !this.state ? [] : Object.keys(this.state.vote).map((prop) => {
            return {
                value: prop,
                artistId: this.state.vote[prop]
            }
        }).reverse();
    }
}
