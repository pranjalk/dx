import React from 'react';
import ReactDOM from 'react-dom';

class Registerformat extends React.Component {
  render() {
    return (
      <div id="register">
        <span id="heading">Diagnostics  &nbsp; &nbsp; &nbsp;</span>
        <form action="/doregister"  method="POST">
          <input type="email" name="registeremail" placeholder="email  "></input>
          <input type="password" name="registerpassword" placeholder=" password  "></input>
          <input type="password" name="registerrepassword" placeholder=" re-enter password  "></input>
          <button id="clickbutton">Register</button>
        </form>
      </div>
    );
  }
}

export default Registerformat;
