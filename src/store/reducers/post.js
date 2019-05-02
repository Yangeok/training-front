import { GET_POSTS, REQUEST, SUCCESS, FAILURE } from '../constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_POSTS[REQUEST]:
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS[SUCCESS]:
      return payload.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue._id]: {
            ...currentValue
          }
        }),
        {
          ...state,
          isLoading: false
        }
      );
    case GET_POSTS[FAILURE]:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
