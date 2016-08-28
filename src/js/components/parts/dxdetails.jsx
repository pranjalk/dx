import React from 'react';
import { connect } from 'react-redux';
import { getDisplayResults, getDxTestResults } from '../../redux/actions/displayActions.jsx';
import { addItemToCart } from '../../redux/actions/cartActions.jsx';
import AvailableTests from './availabletests.jsx';

@connect((store) => (
  {
    data: store.display.display_result,
    dxtests: store.display.dx_tests,
    cart: store.cart.cart,
  }
))
class DxDetails extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(getDisplayResults(this.props.centerId));
    this.props.dispatch(getDxTestResults(this.props.centerId));
  }
  addToCart(data) {
    const dataToSend = {};
    dataToSend.name = data.name;
    dataToSend.dx_id = data.dx_id;
    dataToSend.test_id = data.test_id;
    dataToSend.price = data.price;
    this.props.dispatch(addItemToCart(dataToSend));
  }
  render() {
    return (
      <div className="dx-display">
        <div className="c-dx-strip">
          <div className="c-dx-center-name">{this.props.data.name}</div>
          <div className="c-dx-center-phone">{this.props.data.phone}</div>
        </div>
        <div className="c-dx-strip">
          <div className="c-dx-center-address">{this.props.data.address}</div>
        </div>
        <div className="c-dx-available-test">
          Available Tests
        </div>
        <div className="c-dx-strip">
          { Object.keys(this.props.dxtests).map((itr) =>
            <AvailableTests
              key={itr}
              data={this.props.dxtests[itr]}
              addItem={this.addToCart}
              cartShow={this.props.cart}
            />
            )
          }
        </div>
      </div>
    );
  }
}

DxDetails.propTypes = {
  cart: React.PropTypes.array,
  centerId: React.PropTypes.string,
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  dxtests: React.PropTypes.object,
};

export default DxDetails;
