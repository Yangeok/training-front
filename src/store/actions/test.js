import * as types from 'store/constants';

export const getTests = {
  request: url => {
    return {
      type: types.GET_TESTS[types.REQUEST]
    };
  },
  success: payload => {
    return {
      type: types.GET_TESTS[types.SUCCESS],
      payload
    };
  },
  failure: e => {
    return {
      type: types.GET_TESTS[types.SUCCESS],
      error: e
    };
  }
};
