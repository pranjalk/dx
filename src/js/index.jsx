// Default react go here
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';


import Error404 from './components/template/40x.jsx';
import MainPage from './components/template/main.jsx';
import DxCenter from './components/template/dxcenter.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainPage} />
        <Route path="/dxcenter/:id" component={DxCenter} />
        <Route path="/404" component={Error404} />
        <Route path="*" component={Error404} />
      </Router>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('main-wrapper'));
