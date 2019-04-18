export default {
  apiUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://training-front.netlify.com/'
      : 'http://localhost:3000/'
};
