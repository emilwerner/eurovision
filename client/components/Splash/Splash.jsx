import React from 'react';
import Card from './../Card/Card.jsx'

export default class Splash extends React.Component {
  render() {
    return (
     <div>     
         <Card> 
          <h1>Välkommen till Eurovision 2017!!</h1>
          <p>
              För att komma igång behöver du logga in med ditt Facebook-konto. 
          </p>
         </Card>
     </div>);
  }
}
