import React from 'react';
import Cart from '../parts/cart.jsx';
import HeaderStrip from '../parts/header.jsx';

class Checkout extends React.Component {
  render() {
    return (
      <div className="main-box">
        <HeaderStrip />
          <div className="text-box">
            <Cart />
          </div>
      </div>
    );
  }
}

export default Checkout;
