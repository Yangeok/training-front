import axios from 'axios';
import config from 'lib/config';

export const posts = async id => {
  const response = await axios.get(
    `${config.apiURL}blog/feed/${id}/20`,
    config.header
  );
  return response.data.data.docs;
};
