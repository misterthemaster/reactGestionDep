import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Depenses from './Depenses';
import About from './About';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Depenses} />
      <Route path="addDep" component={Depenses} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
