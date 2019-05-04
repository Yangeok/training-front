import { GET_POSTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const defaultState = {
  isLoading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_POSTS[REQUEST]:
      return { ...state, isLoading: true };
    case GET_POSTS[SUCCESS]:
      return { ...state, isLoading: false, payload: action.payload };
    case GET_POSTS[FAILURE]:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
