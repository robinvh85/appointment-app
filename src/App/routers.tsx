import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'browserHistory';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import AppointmentsPage from 'pages/AppointmentsPage';
import EmployeesPage from 'pages/EmployeesPage';
import CientsPage from 'pages/CientsPage';
import SignupPage from 'pages/SignupPage';

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/appointments' exact component={AppointmentsPage} />
        <Route path='/employees' exact component={EmployeesPage} />
        <Route path='/clients' exact component={CientsPage} />
        <Route path='/signup' exact component={SignupPage} />
      </Switch>
    </Router>
  ) 
}

export default Routers;