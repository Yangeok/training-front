import axios from 'axios';
import config from 'lib/config';

export const lists = async url => {
  const response = await axios.get(`${config.apiURL}${url}/20`, config.header);

  return response.data;
};
