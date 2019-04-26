import { USER_INDEX, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  isLoading: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case USER_INDEX[REQUEST]:
      return {
        ...state,
        isLoading: true
      };
    case USER_INDEX[SUCCESS]:
      return payload.reduce(
        (acc, cur) => ({
          ...acc,
          [cur._id]: {
            ...cur
          }
        }),
        {
          ...state,
          isLoading: false
        }
      );
    case USER_INDEX[FAILURE]:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
