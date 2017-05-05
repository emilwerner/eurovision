import React from 'react';
import { Locations, Location } from 'react-router-component';
import Toolbar from './../Toolbar/Toolbar.jsx'
import Artists from './../Artists/Artists.jsx'
import LoginScreen from './../LoginScreen/LoginScreen.jsx'
import Vote from './../Vote/Vote.jsx'



export default class App extends React.Component {
  render() {
    return (
      <div>
        <LoginScreen />
        <Locations>
          <Location path="/" handler={Artists} />
          <Location path="/vote" handler={Vote} />
        </Locations>
      </div>);
  }
}