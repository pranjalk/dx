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
    this.clearInputValue = this.clearInputValue.bind(this);
    this.delayedClearInputValue = this.delayedClearInputValue.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(cleanResults());
  }
  delayedClearInputValue(e) {
    e.persist();
    setTimeout(() => { this.props.dispatch(cleanResults()); }, 2000);
  }
  clearInputValue() {
    this.props.dispatch(cleanResults());
    this.forceUpdate();
  }
  handleChange(enteredData) {
    enteredData.persist();
    const stringData = enteredData.target.value;
    if (enteredData.target.value === '') {
      this.props.dispatch(cleanResults());
    } else {
      setTimeout(() => { this.props.dispatch(getResults(stringData)); }, 200);
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div
        className="search-bar"
      >
        <form className="search-form">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search for labs..."
            onChange={this.handleChange}
            onFocus={this.handleChange}
            onBlur={this.delayedClearInputValue}
          />
          <div className="live-search-data">
            {this.props.data.map((result, i) =>
              <TableRow key={i} data={result} />)}
          </div>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  searchInput: React.PropTypes.string,
  data: React.PropTypes.object,
  dispatch: React.PropTypes.func
};

export default Searchbar;
