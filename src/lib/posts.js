import axios from 'axios';
import config from 'lib/config';

export const posts = async url => {
  const response = await axios.get(`${config.apiURL}${url}`, config.header);

  return response.data.data;
};
