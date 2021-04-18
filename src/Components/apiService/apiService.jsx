import axios from 'axios';

const Api_Key = '0e6eebd27dfd68a7c4ec96f04756cc6c';

const fetchTrends = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${Api_Key}`)
    .then(response => response.data)
    .catch(console.error);
};

const searchMovies = searchQuery => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=${searchQuery}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data)
    .catch(console.error);
};

const searchDetails = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_Key}&language=en-US`,
    )
    .then(response => response.data)
    .catch(console.error);
};

export { fetchTrends, searchMovies, searchDetails };
