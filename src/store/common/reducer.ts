import { set } from 'lodash';

import { SET_LOADING } from './actions';

export const initialState = {
  loading: false
}

export const commonReducer = (state=initialState, action: any) => {
  switch(action.type) {
    case SET_LOADING:
      set(state, 'loading', action.payload);
      return { ...state };
    default:
      return state;
  }
}