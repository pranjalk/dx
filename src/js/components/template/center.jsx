import React from 'react';
import ReactDOM from 'react-dom';
import Headstrip from '../parts/header.jsx';
import Cart from '../parts/shopping_cart.jsx';
import Details from '../parts/diagnostic_details.jsx';

class DiagnosticsCenter extends React.Component {
  constructor() {
      super();
      this.state = {
        dxCenterName : "Thyrocare" ,
        dxCenterAddress : "No 825, 35th Main, 11th Cross, JP Nagar 1st Phase, Bengaluru, Karnataka 560078" ,
        dxCenterDesc: "Thyrocare Technologies Limited is India's first and most advanced Totally Automated Laboratory having its strong presence in more than 2000 cities / towns in India and internationally. Thyrocare is India's first fully automated diagnostic laboratory with a focus on providing quality at affordable costs to laboratories and hospitals in India and other countries." ,
         data: 
         [
            {
               "id":1,
               "name":"Lipid Profile",
               "price":"450"
            },
        
            {
               "id":2,
               "name":"TSH",
               "price":"300"
            },
        
            {
               "id":3,
               "name":"Vitamin Package",
               "price":"1440"
            }
         ]
      }
   }
   render() {
      return (
        <div>
          <Headstrip />
          <div className="main-box">
            <div className="float-box">
              <div id="dxcenterbox">
                <Details contentProp={this.state} />
              </div>
              <div id="cartbox">
                <Cart />
              </div> 
            </div>
          </div>
        </div>  
      );
   }
}

export default DiagnosticsCenter;