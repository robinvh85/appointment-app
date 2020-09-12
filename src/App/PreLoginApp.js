import React from 'react';

import history from 'browserHistory';
import LoginSignupPage from '../LoginSignupPage';
import SignUp from '../LoginSignupPage'
import { HashRouter, Route, Switch } from 'react-router-dom';
import ForgetPWEmailAsk from '../LoginSignupPage/ForgetPWEmailAsk';
import UpdatePW from '../LoginSignupPage/UpdatePw';

export default function PreLoginApp() {

    return (
        <HashRouter basename="/" history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginSignupPage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/initresetpw" component={ForgetPWEmailAsk} />
                    <Route path="/updatepw" component={UpdatePW} />
                </Switch>
            </div>
        </HashRouter>);
}