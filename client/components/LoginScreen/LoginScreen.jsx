import React from 'react';
import Card from './../Card/Card.jsx'
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
export default class LoginScreen extends React.Component {
  render() {
  
    return (
      <div className="loginScreen">
      <div className="card" style={{width: "auto"}}>
        <h1>
          WOOOOOOOO
        </h1>
        <p>
          Du behöver registrera dig via Facebook innan vi kör igång!
        </p>
      </div>
      </div>);
  }
}
