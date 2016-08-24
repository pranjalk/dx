import React from 'react';
import Searchbar from './searchbar.jsx';

class Headerstrip extends React.Component {
  render() {
    return (
      <div className="header-strip">
        <div className="header-logo-position">
          <img className="header-logo" src="./img/dxlogo.png" alt="logo" />
        </div>
        <div className="header-search-bar">
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default Headerstrip;
