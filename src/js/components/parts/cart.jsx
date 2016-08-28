import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import CartCard from './cartcard.jsx';
import { cleanCart } from '../../redux/actions/cartActions.jsx';


@connect((store) => (
  {
    cart: store.cart.cart,
    price: store.cart.price,
  }
))
class Cart extends React.Component {
  constructor() {
    super();
    this.clearCart = this.clearCart.bind(this);
    this.checkOutCart = this.checkOutCart.bind(this);
    this.whereIsCart = this.whereIsCart.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  checkOutCart() {
    if (this.props.price === 0) {
      alert('the cart is empty!!!');
    } else {
      hashHistory.push('/checkout');
    }
  }
  goBack() {
    window.history.back();
  }
  clearCart() {
    const r = confirm('Are you sure, you want clear you cart?');
    if (r === true) {
      this.props.dispatch(cleanCart());
    }
    if (/\/checkout/i.test(this.props.currentLocation)) {
      this.goBack();
    }
  }
  whereIsCart() {
    if (/\/dxcenter\/\d/i.test(this.props.currentLocation)) {
      //console.log('Yay we are in dxcenter!');
      return (
        <div>
          <button
            className="c-cart-buttons"
            onClick={this.clearCart}
          >
            Clear
          </button>
          <button className="c-cart-buttons" onClick={this.checkOutCart}>
            Checkout!
          </button>
        </div>
      );

    } else if (/\/checkout/i.test(this.props.currentLocation)) {
      return (
        <div>
          <button
            className="c-cart-buttons"
            onClick={this.clearCart}
          >
            Clear
          </button>
          <button
            className="c-cart-buttons"
            onClick={this.goBack}
          >
            Back
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="c-cart-wrapper">
        <div className="c-cart-header">
          <svg className="icon icon-shopping-cart">
            <title>shopping-cart</title>
            <path className="path1" d="M36.323 9.354c-0.334-0.383-0.816-0.604-1.323-0.604h-24.183l-0.341-2.037c-0.14-0.843-0.87-1.463-1.725-1.463h-3.938c-0.968 0-1.75 0.782-1.75 1.75s0.782 1.75 1.75 1.75h2.455l3.255 19.537c0.014 0.079 0.054 0.144 0.079 0.217 0.028 0.093 0.051 0.18 0.094 0.264 0.056 0.116 0.131 0.213 0.21 0.313 0.054 0.068 0.103 0.136 0.166 0.196 0.102 0.095 0.219 0.161 0.338 0.228 0.066 0.037 0.124 0.086 0.196 0.114 0.203 0.082 0.417 0.131 0.642 0.131 0.002 0 19.252 0 19.252 0 0.968 0 1.75-0.782 1.75-1.75s-0.782-1.75-1.75-1.75h-17.768l-0.291-1.75h19.808c0.872 0 1.61-0.64 1.733-1.502l1.75-12.25c0.072-0.504-0.079-1.013-0.41-1.395zM32.982 12.25l-0.499 3.5h-6.234v-3.5h6.732zM24.5 12.25v3.5h-5.25v-3.5h5.25zM24.5 17.5v3.5h-5.25v-3.5h5.25zM17.5 12.25v3.5h-5.25c-0.093 0-0.177 0.026-0.259 0.052l-0.591-3.552h6.101zM12.274 17.5h5.226v3.5h-4.643l-0.583-3.5zM26.25 21v-3.5h5.982l-0.499 3.5h-5.483z"></path>
            <path className="path2" d="M17.5 34.125c0 1.45-1.175 2.625-2.625 2.625s-2.625-1.175-2.625-2.625c0-1.45 1.175-2.625 2.625-2.625s2.625 1.175 2.625 2.625z"></path>
            <path className="path3" d="M33.25 34.125c0 1.45-1.175 2.625-2.625 2.625s-2.625-1.175-2.625-2.625c0-1.45 1.175-2.625 2.625-2.625s2.625 1.175 2.625 2.625z"></path>
          </svg>Cart
        </div>
        <div className="c-cart-body">
          <div className="c-cart-body-scroll">
            { Object.keys(this.props.cart).map((itr) =>
              <CartCard key={itr} dxcart={this.props.cart[itr]} />
            )}
          </div>
        </div>
        <div className="c-cart-price">
          Total &#8377;{this.props.price}
        </div>
          {this.whereIsCart()}
      </div>
    );
  }
}
Cart.propTypes = {
  dispatch: React.PropTypes.func,
  price: React.PropTypes.number,
  cart: React.PropTypes.object,
  currentLocation: React.PropTypes.string,
};

export default Cart;
