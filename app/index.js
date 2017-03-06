import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Dashboard from './Dashboard';
import Layout from './Layout';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>,
  document.getElementById('app')
);
