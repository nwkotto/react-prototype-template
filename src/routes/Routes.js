import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Main from './Main';

const Routes = () => (
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
      </Route>
  </Router>
);

export default Routes;