import React from 'react';
import { connect } from 'react-redux';
import { getResults, cleanResults } from '../../redux/actions/searchActions.jsx';
import TableRow from './searchrows.jsx';

@connect((store) => (
  {
    data: store.search.result,
    searchInput: store.search.searchInput,
  }
))

class Searchbar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.updateTag = this.updateTag.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(cleanResults());
    this.forceUpdate();
  }
  updateTag() {
    this.props.dispatch(cleanResults());
    this.forceUpdate();
  }
  handleChange(enteredData) {
    if (enteredData.target.value === '') {
      this.props.dispatch(cleanResults());
    } else {
      this.props.dispatch(getResults(enteredData.target.value));
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div className="search-bar">
        <form className="search-form">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search for labs..."
            onChange={this.handleChange}
            value={this.props.searchInput}
          />
          <div className="live-search-data">
            <table className="table-main">
              <tbody>
                {this.props.data.map((result, i) =>
                  <TableRow key={i} data={result} updateBox={this.updateTag} />)}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  searchInput: React.PropTypes.string,
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default Searchbar;
