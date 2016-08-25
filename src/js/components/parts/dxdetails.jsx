import React from 'react';
import { connect } from 'react-redux';
import { getDisplayResults, getDxTestResults } from '../../redux/actions/displayActions.jsx';

@connect((store) => (
  {
    data: store.display.display_result,
    dxtests: store.display.dx_tests
  }
))
class DxDetails extends React.Component {
  componentWillMount() {
    this.props.dispatch(getDisplayResults(this.props.propId));
    this.props.dispatch(getDxTestResults(this.props.propId));
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
