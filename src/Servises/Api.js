import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5c6855009dd58021f283b6505813d1c2';

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const movieDetails = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const movieCredits = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const movieReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};
