import axios from 'axios';

export const lists = async url => {
  const repsonse = await axios.get(url);
  const people = repsonse.data.data;

  return people;
};
