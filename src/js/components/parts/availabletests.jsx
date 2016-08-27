import React from 'react';

class AvailableTests extends React.Component {
  constructor() {
    super();
    this.clickEvent = this.clickEvent.bind(this);
  }
  clickEvent() {
    this.props.addItem(this.props.data);
  }
  checkIfItemAlreadyAdded() {
    console.log('my cart is ', this.props.cartShow);
    if (this.props.data.dx_id in this.props.cartShow) {
      if (this.props.data.test_id in this.props.cartShow[this.props.data.dx_id].cart) {
        return (<button className="c-test-add-button">
        Added
        </button>);
      } else {
        return (<button className="c-test-add-button" onClick={this.clickEvent}>
        Add to Cart
        </button>);
      }
    } else {
      return (<button className="c-test-add-button" onClick={this.clickEvent}>
        Add to Cart
      </button>);
    }
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
        {this.checkIfItemAlreadyAdded()}
      </div>
    );
  }
}
AvailableTests.propTypes = {
  addItem: React.PropTypes.func,
  data: React.PropTypes.object,
  name: React.PropTypes.string,
  price: React.PropTypes.string,
  description: React.PropTypes.string,
  cartShow: React.PropTypes.object,
};

export default AvailableTests;
