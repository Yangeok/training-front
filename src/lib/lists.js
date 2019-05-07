import axios from 'axios';
import config from 'lib/config';

export const lists = async id => {
  const response = await axios.get(
    `${config.apiURL}blog/${id}/100`,
    config.header
  );
  return response.data.data;
};
