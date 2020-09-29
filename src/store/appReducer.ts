import { initialState as commonState } from './common/reducer';
import { commonReducer } from './common/reducer';
import { initialState as employeeState } from './employee/reducer';
import { employeeReducer } from './employee/reducer';

export const appState = {
  common: commonState,
  employee: employeeState
}

const appReducer = (state: any, action: any) => {
  return {
    common: commonReducer(state.common, action),
    employee: employeeReducer(state.employee, action)
  }
}

export default appReducer;