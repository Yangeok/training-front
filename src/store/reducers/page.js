import { GET_LISTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LISTS[REQUEST]:
      return {
        ...state,
        isLoading: true
      };
    case GET_LISTS[SUCCESS]:
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
    case GET_LISTS[FAILURE]:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
