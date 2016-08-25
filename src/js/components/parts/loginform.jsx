import React from 'react';

class Loginformat extends React.Component {
  render() {
    return (
      <div id="login">
        <span id="heading">Diagnostics &nbsp; &nbsp; &nbsp;</span>
        <form action="/dologin" method="POST">
          <input type="email" name="loginemail" placeholder="email  " />
          <input type="password" name="loginpassword" placeholder=" password  " />
          <button id="clickbutton">Login</button>
        </form>
      </div>
    );
  }
}

export default Loginformat;
