import React from 'react';
import Card from './../Card/Card.jsx';
import Artist from "./Artist.jsx";
import artistData from "./../../../artists.json";
import Event from './../../Classes/Event.jsx';

export default class Artists extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="btn-vote-wrapper">
            <div className="btn btn-primary btn-vote" onClick={() => { Event.trigger("voteView") }} >
              Klicka här är att rösta!
          </div>
          </div>
        </div>
        {artistData.artists.map(artist => (
          <Artist
            key={artist.id}
            artist={artist}
          />
        ))}
      </div>);
  }
}
