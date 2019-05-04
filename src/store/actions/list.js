import * as types from 'store/constants';

export const getLists = {
  request: url => {
    return {
      type: types.GET_LISTS[types.REQUEST],
      url
    };
  },
  success: payload => {
    return {
      type: types.GET_LISTS[types.SUCCESS],
      payload
    };
  },
  failure: error => {
    return {
      type: types.GET_LISTS[types.FAILURE],
      error: error.message
    };
  }
};
