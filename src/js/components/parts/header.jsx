import React from 'react';
import { Link } from 'react-router';
import Searchbar from './searchbar.jsx';

class Headerstrip extends React.Component {
  render() {
    return (
      <div className="header-strip">
        <div className="header-logo-position">
          <Link to={'/'}>
            <img className="header-logo" src="./img/dxlogo.png" alt="logo" />
          </Link>
        </div>
        <div className="header-search-bar">
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default Headerstrip;
