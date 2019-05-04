import * as types from 'store/constants';

export const getTests = {
  request: url => {
    return {
      type: types.GET_TESTS[types.REQUEST],
      url
    };
  },
  success: payload => {
    return {
      type: types.GET_TESTS[types.SUCCESS],
      payload
    };
  },
  failure: error => {
    return {
      type: types.GET_TESTS[types.FAILURE],
      error: error.message
    };
  }
};
