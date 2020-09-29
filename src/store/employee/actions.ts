import { IAction } from 'models/store';

export const GET_LIST = '@@EMPLOYEE_GET_LIST';

export const getList = (data: any): IAction => (
  {
    type: GET_LIST,
    payload: data
  }
)

