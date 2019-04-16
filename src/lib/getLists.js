import axios from 'axios';

export const getBlogLists = url => {
  axios.get(url).then(results => results);
};
export const getYoutubeLists = url => {
  axios.get(url).then(results => results);
};
