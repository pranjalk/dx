import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../parts/searchbar.jsx';

class Indextemplate extends React.Component {
   render() {
      return (
          <div className="main-box">
            <div className="float-box">
              <div className="text-box">
                  <img className="logo" src="./img/dxlogo.png"></img>
                  <Searchbar />
              </div>  
            </div>
          </div>
      );
   }
}

export default Indextemplate;
