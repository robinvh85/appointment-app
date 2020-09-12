import React from 'react';

import history from 'browserHistory';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SchedulerPage from '../pages/FunctionPage'

export default function PreLoginApp() {

    return (
        <HashRouter basename="/" history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={SchedulerPage} />
                </Switch>
            </div>
        </HashRouter>);
}