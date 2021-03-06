export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const GET_LISTS = createRequestTypes('GET_LISTS');
export const GET_POSTS = createRequestTypes('GET_POSTS');
export const GET_HOME_GRIDS = createRequestTypes('GET_HOME_GRIDS');
