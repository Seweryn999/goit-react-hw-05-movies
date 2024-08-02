import axios from 'axios';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
});

export const movieApiLuncher = async url => {
  const response = await movieApi.get(url).catch(error => {
    if (error.response.status === 400) {
      alert("We're sorry, but you've reached the end of search results.");
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  return response;
};
