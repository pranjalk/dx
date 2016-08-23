import React from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <form className="search-form">
          <input type="text" id="search-bar__input" placeholder="Search for labs..." />
          <div className="live-search-data" />
        </form>
      </div>
    );
  }
}

export default Searchbar;
