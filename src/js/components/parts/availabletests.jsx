import React from 'react';
import { connect } from 'react-redux';

@connect((store) => (
  {
  }
))
class AvailableTests extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart() {
    const send_to_cart = {
      name: this.props.data.name,
      price: this.props.data.price,
      dx_id: this.props.data.dx_id,
      test_id: this.props.data.test_id
    }
  }
  render() {
    return (
      <div className='c-test-results'>
        <div className='c-test-header'>
          <div className='c-test-name'>
            {this.props.data.name}
          </div>
          <div className='c-test-price'>
            &#8377;{this.props.data.price}
          </div>
        </div>  
        <div className='c-test-body'>
            {this.props.data.description}
        </div>
        <button className='c-test-add-button' onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}

AvailableTests.propTypes = {
  data: React.PropTypes.object,
  name: React.PropTypes.string,
  price: React.PropTypes.string,
  description: React.PropTypes.string
};

export default AvailableTests;
