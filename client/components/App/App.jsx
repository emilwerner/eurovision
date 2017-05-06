import React from 'react';
import Toolbar from './../Toolbar/Toolbar.jsx'
import Artists from './../Artists/Artists.jsx'
import LoginScreen from './../LoginScreen/LoginScreen.jsx'
import Vote from './../Vote/Vote.jsx'
import Storage from './../../Classes/Storage.jsx';
import Event from './../../Classes/Event.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { appState: this.getAppState(), isVoting: false };

    Event.on("login", () => {
      this.setState({ appState: this.getAppState() });
    });
    Event.on("voteView", () => {
      this.setState({
        isVoting: !this.state.isVoting
      });
      setTimeout(() => {
        this.setState({
          appState: this.getAppState()
        });
      });

    });
  }

  render() {
    return (
      <div>
        {this.getView()}
      </div>);
  }

  getView() {
    if (this.state.appState === 2) {
      return <LoginScreen />;
    }
    else if (this.state.appState === 3) {
      return <Vote />;
    }
    return <Artists />;
  }

  getAppState() {
    let appState = 1;

    if (!Storage.currentUser()) {
      appState = 2;
    } else if (this.state && this.state.isVoting) {
      appState = 3;
    }


    return appState;
  }
}