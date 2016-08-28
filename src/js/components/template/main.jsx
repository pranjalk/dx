import React from 'react';
import { Link } from 'react-router';
import Searchbar from '../parts/searchbar.jsx';

class Indextemplate extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="text-box">
          <Link to={'/'}>
            <img className="logo" src="./img/dxlogo.png" alt="logo" />
          </Link>
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default Indextemplate;
