import * as types from 'store/constants';

export const getPosts = {
  request: url => {
    return {
      type: types.GET_POSTS[types.REQUEST],
      url
    };
  },
  success: payload => {
    return {
      type: types.GET_POSTS[types.SUCCESS],
      payload
    };
  },
  failure: err => {
    return {
      type: types.GET_POSTS[types.FAILURE],
      err: err.message
    };
  }
};
