import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import Cart from '../parts/cart.jsx';
import HeaderStrip from '../parts/header.jsx';

@connect((store) => (
  {
    cart: store.cart.cart,
    price: store.cart.price,
  }
))
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name',
      phone: '+91-9912367890',
      email: 'add@email.here',
      Address: 'Your Address',
      appointmentDate: moment(),
    };
  }
  render() {
    return (
      <div className="main-box">
        <HeaderStrip />
        <div className="text-box">
          <div>
            <div className="checkout-form">
              <input
                type="text"
                className="checkout-form__input"
                placeholder={this.state.name}
                onChange={this.handleNameChange}
              />
              <DatePicker
                selected={this.state.appointmentDate}
                onChange={this.handleDateChange}
              />
              <input
                type="text"
                className="checkout-form__input"
                placeholder={this.state.phone}
                onChange={this.handlePhoneChange}
              />
              <input
                type="email"
                className="checkout-form__input"
                placeholder={this.state.email}
                onChange={this.handleEmailChange}
              />
              <textarea
                className="checkout-form__textarea"
                placeholder={this.state.Address}
                onChange={this.handleEmailChange}
              />
            </div>
            <div class="checkout-cart-container">
              <Cart currentLocation={this.props.location.pathname} />
            </div>  
          </div>
          <button className="c-test-add-button" onClick={this.clickEvent}>
          <svg className="icon icon-circle-plus">
            <title>circle-plus</title>
            <path className="path1" d="M24 2q4.484 0 8.555 1.742t7.016 4.687 4.688 7.016 1.742 8.555-1.742 8.555-4.688 7.016-7.016 4.688-8.555 1.742-8.555-1.742-7.016-4.688-4.688-7.016-1.742-8.555 1.742-8.555 4.688-7.016 7.016-4.688 8.555-1.742zM24 6q-3.656 0-6.992 1.43t-5.742 3.836-3.836 5.742-1.43 6.992 1.43 6.992 3.836 5.742 5.742 3.836 6.992 1.43 6.992-1.43 5.742-3.836 3.836-5.742 1.43-6.992-1.43-6.992-3.836-5.742-5.742-3.836-6.992-1.43zM24 14q0.828 0 1.414 0.586t0.586 1.414v6h6q0.828 0 1.414 0.586t0.586 1.414-0.586 1.414-1.414 0.586h-6v6q0 0.828-0.586 1.414t-1.414 0.586-1.414-0.586-0.586-1.414v-6h-6q-0.828 0-1.414-0.586t-0.586-1.414 0.586-1.414 1.414-0.586h6v-6q0-0.828 0.586-1.414t1.414-0.586z"></path>
          </svg>
        </button>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: React.PropTypes.object,
  pathname: React.PropTypes.string,
  name: React.PropTypes.string,
  phone: React.PropTypes.string,
  email: React.PropTypes.string,
  Address: React.PropTypes.string,
};

export default Checkout;
