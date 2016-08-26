import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cartActions.jsx';

@connect((store) => (
  {
    checktests: store.cart.checkTests,
  }
))
class AvailableTests extends React.Component {

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart() {
    this.props.dispatch(addItemToCart(this.props.data));
    this.forceUpdate();
  }
  render() {
    return (
      <div className="c-test-results">
        <div className="c-test-header">
          <div className="c-test-name">
            {this.props.data.name}
          </div>
          <div className="c-test-price">
            &#8377;{this.props.data.price}
          </div>
        </div>
        <div className="c-test-body">
            {this.props.data.description}
        </div>
        <button className="c-test-add-button" onClick={this.addToCart}>
          Add to Cart
      </button>
      </div>
    );
  }
}

AvailableTests.propTypes = {
  checktests: React.PropTypes.object,
  sendToCart: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  name: React.PropTypes.string,
  price: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default AvailableTests;
