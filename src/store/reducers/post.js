import { GET_POSTS, REQUEST, SUCCESS, FAILURE } from 'store/constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_POSTS[REQUEST]:
      return { ...state, isLoading: true };
    case GET_POSTS[SUCCESS]:
      return { ...state, isLoading: false, payload };
    case GET_POSTS[FAILURE]:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
