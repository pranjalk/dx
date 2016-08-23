import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Error404 from './components/template/40x.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='*' component={Error404} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-wrapper'));