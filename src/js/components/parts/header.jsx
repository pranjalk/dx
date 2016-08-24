import React from 'react';
import ReactDOM from 'react-dom';

class Headerstrip extends React.Component {
   render() {
      return (
        <div className="topstrip">
            <div id="logobox">
              <img id="logo" src="../../../dist/img/dxlogo.png"></img>
            </div>
            <div id="searchbox">
              <Searchbar />
            </div>
            <div id="loginbox"> 
              <Login />
            </div>  
          </div>
      );
   }
}

export default Headerstrip;