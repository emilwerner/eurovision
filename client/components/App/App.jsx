import React from 'react';
import {Locations, Location} from 'react-router-component';

import Toolbar from './../Toolbar/Toolbar.jsx'
import Splash from './../Splash/Splash.jsx'
import LoginScreen from './../LoginScreen/LoginScreen.jsx'


export default class App extends React.Component {
  render() {
    return (
     <div>      
       <Locations>
          <Location path="/" handler={Splash} />
       </Locations>
       <Toolbar />
      </div>);
  }
}