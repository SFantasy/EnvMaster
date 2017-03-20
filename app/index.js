import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout';
import Basis from './Basis';
import Node from './Node';
import About from './About';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Basis} />
      <Route path="node" component={Node} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
