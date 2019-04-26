// import axios from 'axios';
// import config from 'lib/config';
import * as types from 'store/constants';

export const getBlogList = {
  request: url => {
    return {
      type: types.USER_INDEX[types.REQUEST],
      url
    };
  },
  success: blogs => {
    return {
      type: types.USER_INDEX[types.SUCCESS],
      payload: blogs
    };
  },
  failure: err => {
    return {
      type: types.USER_INDEX[types.FAILURE],
      err: err.message
    };
  }
};
