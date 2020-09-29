import React from 'react'

export const StateContext = React.createContext<{state: any, dispatch: any}>({
  state: {},
  dispatch: () => {}
})