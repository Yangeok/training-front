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
  failure: err => {
    return {
      type: types.GET_LISTS[types.FAILURE],
      err: err.message
    };
  }
};
