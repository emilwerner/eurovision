import React from 'react';
import Storage from './../../Classes/Storage.jsx';
import artistData from "./../../../artists.json";


export default class ArtistSelector extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="artistSelector">
                <div className="point">
                    {this.props.point.value} poäng
                </div>
                <div className="artistArea">
                    Klicka för att välja artist
                </div>
            </div>
        );
    }
}
