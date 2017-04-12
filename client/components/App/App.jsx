import React from 'react';
import {Locations, Location} from 'react-router-component';

import Toolbar from './../Toolbar/Toolbar.jsx'
import Artists from './../Artists/Artists.jsx'
import LoginScreen from './../LoginScreen/LoginScreen.jsx'


export default class App extends React.Component {
  render() {
    return (
     <div>  
       <LoginScreen />    
       <Locations>
          <Location path="/" handler={Artists} />
       </Locations>
       <Toolbar />
      </div>);
  }
}