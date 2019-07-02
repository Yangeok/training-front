import { GET_LISTS, REQUEST, SUCCESS, FAILURE } from 'store/constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_LISTS[REQUEST]:
      return { ...state, isLoading: true };
    case GET_LISTS[SUCCESS]:
      return {
        ...state,
        isLoading: false,
        payload: payload.docs,
        pageMeta: payload.totalDocs
      };
    case GET_LISTS[FAILURE]:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
