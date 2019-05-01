import { GET_TESTS, REQUEST, SUCCESS, FAILURE } from 'store/constants';

const defaultState = {
  isLoading: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_TESTS[REQUEST]:
      return { ...state, isLoading: true };
    case GET_TESTS[SUCCESS]:
      return { ...state, isLoading: false, payload: payload };
    case GET_TESTS[FAILURE]:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
