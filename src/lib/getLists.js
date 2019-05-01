import axios from 'axios';

/**
 * @param {String} url api server page
 */
export const getLists = url => {
  axios.get(url).then(results => results);
};
