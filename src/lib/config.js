export default {
  apiUrl:
    process.env.NODE_ENV === 'production' && // ? 'https://training-front.netlify.com/'
    // : 'http://localhost:3000/',
    'https://training-log-back.herokuapp.com/',
  header: { headers: { 'Access-Control-Allow-Origin': '*' } }
};
