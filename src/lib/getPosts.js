import axios from 'axios';

export const getPosts = async url => {
  const response = await axios.get(url);
  const posts = response.data.data.docs;

  return posts;
};
