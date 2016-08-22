import React from 'react';
import ReactDOM from 'react-dom';
import Headstrip from '../parts/header.jsx';

class DiagnosticsCenter extends React.Component {
   render() {
      return (
        <div>
          <div className="main-box">
            <div className="float-box">
            <Headstrip />
              <div className="textbox">
              </div>
            </div>
          </div>
        </div>  
      );
   }
}

export default DiagnosticsCenter;