import React from 'react';
import { Link } from 'react-router';

class TableRow extends React.Component {

  render() {
    return (
      <div className='c-search-results'>
        <Link to={'/dxcenter/' + this.props.data.id} onClick={this.props.updateBox.bind(this, this.props.data.id)}>
            {this.props.data.name}
        </Link>
      </div>
    );
  }
}

TableRow.propTypes = {
  updateBox: React.PropTypes.func,
  data: React.PropTypes.object,
  id: React.PropTypes.number,
  name: React.PropTypes.string
};

export default TableRow;
