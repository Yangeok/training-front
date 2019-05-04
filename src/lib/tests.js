import axios from 'axios';
import config from 'lib/config';

export const tests = async url => {
  const response = await axios.get(
    `https://training-log-back.herokuapp.com/${url}/feed/1/100`,
    config.
  );
  const posts = response.data.data.docs;

  return posts;
};
