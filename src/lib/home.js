import axios from 'axios';
import config from 'lib/config';

export const home = async (blog, youtube) => {
  const blogResponse = await axios.get(
    `${config.apiURL}${blog}`,
    config.header
  );
  const youtubeResponse = await axios.get(
    `${config.apiURL}${youtube}`,
    config.header
  );

  return [blogResponse.data.data.docs, youtubeResponse.data.data.docs];
};
