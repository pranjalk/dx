import React from 'react';
import { Link } from 'react-router';
import Cart from '../parts/cart.jsx';
import HeaderStrip from '../parts/header.jsx';

class Checkout extends React.Component {
  render() {
    return (
      <div className="main-box">
        <HeaderStrip />
          <div className="text-box">
            <Cart currentLocation={this.props.location.pathname} />
          </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: React.PropTypes.object,
  pathname: React.PropTypes.string,
};

export default Checkout;
