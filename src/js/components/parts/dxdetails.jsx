import React from 'react';
import { connect } from 'react-redux';
import { getDisplayResults, getDxTestResults } from '../../redux/actions/displayActions.jsx';
import AvailableTests from './availabletests.jsx';

@connect((store) => (
  {
    data: store.display.display_result,
    dxtests: store.display.dx_tests
  }
))
class DxDetails extends React.Component {
  componentWillMount() {
    this.props.dispatch(getDisplayResults(this.props.centerId));
    this.props.dispatch(getDxTestResults(this.props.centerId));
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
        <div className="c-dx-strip">
          <div className="c-dx-center-description">{this.props.data.description}</div>
        </div>
        <div className="c-dx-available-test">
          Available Tests
        </div>
        <div className="c-dx-strip">
          {this.props.dxtests.map((result, i) =>
              <AvailableTests key={i} data={result} />)}
        </div>
      </div>
    );
  }
}

DxDetails.propTypes = {
  data: React.PropTypes.object,
  propId: React.PropTypes.string,
  dispatch: React.PropTypes.func
};

export default DxDetails;
