import React from 'react';
import HeaderStrip from '../parts/header.jsx';
import DxDetails from '../parts/dxdetails.jsx';
import Cart from '../parts/cart.jsx';

class DxCenter extends React.Component {
  render() {
    return (
      <div className="main-box">
        <HeaderStrip />
        <div className="dx-body-box">
          <DxDetails centerId={this.props.params.id} />
          <div className="c-cart-display">
            <Cart currentLocation={this.props.location.pathname} />
          </div>
        </div>
      </div>
    );
  }
}

DxCenter.propTypes = {
  params: React.PropTypes.object,
  id: React.PropTypes.string,
  location: React.PropTypes.object,
  pathname: React.PropTypes.string,
};

export default DxCenter;
