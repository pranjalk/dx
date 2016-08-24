import React from 'react';
import { connect } from 'react-redux';
import { getResults } from '../../redux/actions/searchActions.jsx';
import TableRow from './searchrows.jsx';

@connect((store) => (
  {
    data: store.search.result,
  }
))

class Searchbar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(enteredData) {
    // console.log('data in store is', this.props.data);
    this.props.dispatch(getResults(enteredData.target.value));
    // console.log('enteredData :', enteredData.target.value);
    this.forceUpdate();
  }

  render() {
    // console.log('Am I here?', this.props.data);
    return (
      <div className="search-bar">
        <form className="search-form">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search for labs..."
            onChange={this.handleChange}
          />
          <div className="live-search-data">
            <table className="table-main">
              <tbody>
                {this.props.data.map((result, i) => <TableRow key={i} data={result} />)}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default Searchbar;
