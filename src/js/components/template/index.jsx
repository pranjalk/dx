import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../parts/searchbar.jsx';

class Indextemplate extends React.Component {
   render() {
      return (
          <div className="main-box">
            <div className="float-box">
              <div id="position-box">
                <div className="main-logo">
                  <img id="logo" src="./img/dxlogo.png"></img>
                </div>
                <Searchbar />
              </div>  
            </div>
          </div>
      );
   }
}

export default Indextemplate;