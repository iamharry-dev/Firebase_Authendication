import React, { Component } from 'react';
import fire from './Components/Login/firebase';
import Login from './Components/Login/login';
import Logout from './Components/Login/logout';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Logout /> ) : ( <Login /> ) }
      </div>
    );
  }
}


export default App;