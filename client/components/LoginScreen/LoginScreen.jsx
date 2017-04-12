import React from 'react';
import Card from './../Card/Card.jsx'
import Storage from './../../Classes/Storage.jsx';

export default class LoginScreen extends React.Component {  
  componentWillMount(){
    this.setState({
      hasUserName: !!Storage.currentUser()
    });
  }

  render() {  
    return (this.state.hasUserName ? null :
     <div className="loginScreen">
        <Card>
          <h1>
            Registrering
          </h1>
          <p>
            Du behöver registrera dig innan vi kör igång!
          </p>
            <div className="form-group">
              <input type="text" style={{width: "150px", display: "inline-block", marginRight:"5px"}}
              className="form-control"placeholder="Namn.." />
              <button type="submit" className="btn btn-default">Kör!</button>   
            </div>     
        </Card>
      </div>);
  }
}
