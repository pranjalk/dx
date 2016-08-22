import React from 'react';
import ReactDOM from 'react-dom';
import Fiveothree from '../parts/fiveothree.jsx';

class Fiveox extends React.Component {
   render() {
      return (
          <div className="main-box">
            <div className="float-box">
              <div className="textbox">
                <Fiveothree />
              </div>
            </div>
          </div>
      );
   }
}

export default Fiveox;