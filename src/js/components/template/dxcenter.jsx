import React from 'react';
import Searchbar from '../parts/searchbar.jsx';

class DxCenter extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="text-box">
          <img className="logo" src="./img/dxlogo.png" alt="logo" />
            <Searchbar />
        </div>
      </div>
    );
  }
}

export default DxCenter;
