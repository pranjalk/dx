import React from 'react';
import ReactDOM from 'react-dom';
import Fourofour from '../parts/fourofour.jsx';

class Fourox extends React.Component {
   render() {
      return (
          <div className="main-box">
            <div className="float-box">
              <div className="textbox">
                <Fourofour />
              </div>
            </div>
          </div>
      );
   }
}

export default Fourox;