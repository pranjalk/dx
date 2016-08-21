import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from '../parts/registerform.jsx';

class Loginputs extends React.Component {
   render() {
      return (
          <div className="main-box">
            <div className="float-box">
                <RegisterForm />
            </div>
          </div>
      );
   }
}

export default Loginputs;