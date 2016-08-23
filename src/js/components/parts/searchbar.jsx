import React from 'react';
import ReactDOM from 'react-dom';


class Searchbar extends React.Component {
  handleChange(enteredData) {
    console.log('enteredData :' + enteredData.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-form">
          <input type="text" className="search-bar__input" placeholder="Search for labs..." onChange={this.handleChange} />
          <div className="live-search-data" />
        </form>
      </div>
    );
  }
}
export default Searchbar;