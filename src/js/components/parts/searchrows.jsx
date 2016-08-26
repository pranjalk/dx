import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { cleanResults } from '../../redux/actions/searchActions.jsx';
import { getDisplayResults, getDxTestResults } from '../../redux/actions/displayActions.jsx';

@connect((store) => (
  {
  }
))

class TableRow extends React.Component {
  constructor() {
    super();
    this.clearInputValue = this.clearInputValue.bind(this);
  }
  clearInputValue() {
    this.props.dispatch(getDisplayResults(this.props.data.id));
    this.props.dispatch(getDxTestResults(this.props.data.id));
    this.props.dispatch(cleanResults());
    this.forceUpdate();
  }
  render() {
    return (
      <div className="c-search-results">
        <Link to={'/dxcenter/' + this.props.data.id} onClick={this.clearInputValue}>
            {this.props.data.name}
        </Link>
      </div>
    );
  }
}

TableRow.propTypes = {
  dispatch: React.PropTypes.func,
  updateBox: React.PropTypes.func,
  data: React.PropTypes.object,
  id: React.PropTypes.number,
  name: React.PropTypes.string,
};

export default TableRow;
