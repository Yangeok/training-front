export const INDEX_PAGE_SIZE_DEFAULT = 50;
export const INDEX_PAGE_SIZE_OPTIONS = [5, 10, 20, 30, 50, 100];

export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const FAILURE = '_FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}
