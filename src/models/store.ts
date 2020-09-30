export interface IAction {
  type: string;
  payload?: any
}

export interface IStateData {
  list: {
    data: any[],
    loading: boolean;
  },
  item: {
    data: any,
    loading: boolean;
  }
}