import React from 'react';
import ReactDOM from 'react-dom';

export default class Searchbar extends React.Component {
  render() {
    return (
      <div id="searchBar">
        <form action="/search" method="GET">
          <input list="searchOption" id="inputlist" name="searchtype" type="text" placeholder="Search by"></input>
          <datalist id="searchOption" name="searchtype">
            <option value="centers"></option>
            <option value="tests"></option>
          </datalist>
          <input type="text" name="searchelement" id="searchbox" placeholder="lab name / test type"></input>
          <button id="searchClick">
              <img id="searchlogo" src="./img/search.png"></img>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;