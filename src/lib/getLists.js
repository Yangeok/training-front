import axios from 'axios';

export const getLists = url => {
  axios.get(url).then(results => results);
};
