import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout';
import Basic from './Basic';
import Node from './Node';
import About from './About';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="basic" component={Basic} />
      <Route path="node" component={Node} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
