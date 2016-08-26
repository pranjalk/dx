import React from 'react';
import { connect } from 'react-redux';

@connect((store) => (
  {
    data: store.cart.cart,
    price: store.cart.price,
  }
))
class Cart extends React.Component {
  render() {
    return (
      <div className="c-cart-display">
        <div className="c-cart-header">
          cart
        </div>
        <div className="c-cart-body">
        </div>
        <div className="c-cart-price">
          Price is {this.props.price}
        </div>
        <div className="c-car-buttons">
          <button>Clear</button>
          <button>Checkout!</button>
        </div>
      </div>
    );
  }
}
Cart.propTypes = {
  price: React.PropTypes.number,
  data: React.PropTypes.array,
};

export default Cart;
