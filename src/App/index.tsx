import React, { useReducer } from 'react';

import appReducer from 'store/appReducer';
import { StateContext } from 'store/contexts';
import Routers from './routers';
import { appState } from 'store/appReducer';

const App = () => {
  const [ state, dispatch ] = useReducer(appReducer, appState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <Routers />
    </StateContext.Provider>
  ) 
}

export default App;