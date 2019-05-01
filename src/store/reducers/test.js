import { GET_TESTS, REQUEST, SUCCESS, FAILURE } from 'store/constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TESTS[REQUEST]:
      return { ...state, loading: true };
    case GET_TESTS[SUCCESS]:
      return { ...state, loading: false, payload: payload };
    case GET_TESTS[FAILURE]:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
