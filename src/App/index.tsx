import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'browserHistory';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </Router>
  ) 
}

export default App;