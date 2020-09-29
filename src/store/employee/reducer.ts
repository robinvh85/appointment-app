import { set } from 'lodash';

import { GET_LIST } from './actions';
import { IStateData } from 'models/store';

export const initialState:IStateData = {
  list: {
    data: [],
    loading: false
  },
  item: {
    data: [],
    loading: false
  }
}

export const employeeReducer = (state=initialState, action: any) => {
  switch(action.type) {
    case GET_LIST:
      set(state, ['list', 'data'], action.payload);
      return { ...state };
    default:
      return state;
  }
}