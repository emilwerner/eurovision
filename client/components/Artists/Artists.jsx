import React from 'react';
import Card from './../Card/Card.jsx';
import Artist from "./Artist.jsx";
import artistData from "./../../../artists.json";



export default class Artists extends React.Component {
  render() {
    return (
      <div>
        {artistData.artists.map(artist => (
          <Artist
            key={artist.id}
            artist={artist}
          />
        ))}
      </div>);
  }
}
