import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import history from 'browserHistory';
import PreLoginApp from './PostLoginApp';
import PostLoginApp from './PostLoginApp';

const App = () => {
  const globalVars = require('./GlobalVars')
  const login_success = Cookies.get(globalVars.GlobalVars.loginCookie)

  return (
    <div>
      {login_success ? <PostLoginApp></PostLoginApp> : <PreLoginApp></PreLoginApp>}
    </div>
  );

  // return (
  //   <Router history={history}>
  //     <Switch>
  //       <Route path='/' exact component={HomePage} />
  //       <Route path='/login' exact component={LoginPage} />
  //     </Switch>
  //   </Router>
  // )

}

export default App;