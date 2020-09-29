export const SET_LOADING = '@@COMMON_SET_LOADING';

export const setLoading = (loading: boolean) => (
  {
    type: SET_LOADING,
    payload: loading
  }
)