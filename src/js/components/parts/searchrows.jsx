import React from 'react';
import { Link } from 'react-router';

class TableRow extends React.Component {
  render() {
    // console.log('props in table row is', this.props);
    return (
      <tr className="table-main__row">
        <td className="table-main__data">
          <Link to={'/dxcenter/' + this.props.data.id}>
            {this.props.data.name}
          </Link>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  data: React.PropTypes.object,
  id: React.PropTypes.number,
  name: React.PropTypes.string,
};

export default TableRow;
