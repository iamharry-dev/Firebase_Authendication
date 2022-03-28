import React from 'react';
import fire from './firebase';

class Logout extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>
        <input className="btn solid" type="submit" value="Logout" onClick={this.logout} />
      </div>
    )
  }
}

export default Logout;