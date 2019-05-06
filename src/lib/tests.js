import axios from 'axios';
import config from 'lib/config';

export const tests = async id => {
  const response = await axios.get(
    `https://training-log-back.herokuapp.com/blog/feed/1/100`,
    config.header
  );
  const posts = response.data.data.docs;

  return posts;
};
