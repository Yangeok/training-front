export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const INDEX_PAGE_SIZE_DEFAULT = 50;
export const INDEX_PAGE_SIZE_OPTIONS = [5, 10, 20, 30, 50, 100];
export const USER_INDEX_META = 'USER_INDEX_META';
export const USER_INDEX = createRequestTypes('USER_INDEX');
