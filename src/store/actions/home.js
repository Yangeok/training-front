import * as types from 'store/constants';

export const getHomeGrids = {
  request: (blog, youtube) => {
    return {
      type: types.GET_HOME_GRIDS[types.REQUEST],
      blog,
      youtube
    };
  },
  success: payload => {
    return {
      type: types.GET_HOME_GRIDS[types.SUCCESS],
      payload
    };
  },
  failure: error => {
    return {
      type: types.GET_HOME_GRIDS[types.FAILURE],
      error: error.message
    };
  }
};
