import React from 'react';
import ReactDOM from 'react-dom';
import Loginform from '../parts/loginform.jsx';

class Loginputs extends React.Component {
   render() {
      return (
          <div className="main-box">
            <div className="float-box">
                <Loginform />
            </div>
          </div>
      );
   }
}

export default Loginputs;