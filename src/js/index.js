import React from 'react';
import ReactDOM from 'react-dom';

import Error404 from './components/template/40x.jsx';
import MainPage from './components/template/index.jsx';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={MainPage} />
          <Route path='*' component={Error404} />
        </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main-wrapper'));