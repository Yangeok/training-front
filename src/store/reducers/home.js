import { GET_HOME_GRIDS, REQUEST, SUCCESS, FAILURE } from 'store/constants';

export default (state = {}, { type, payload, blog, youtube }) => {
  switch (type) {
    case GET_HOME_GRIDS[REQUEST]:
      return { ...state, isLoading: true };
    case GET_HOME_GRIDS[SUCCESS]:
      return {
        ...state,
        isLoading: false,
        blog: payload.blog,
        youtube: payload.youtube
      };
    case GET_HOME_GRIDS[FAILURE]:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
