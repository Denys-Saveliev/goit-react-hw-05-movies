import axios from 'axios';
const API_KEY = '123f947c685fb26961bd016d0ca5c833';

async function fetchMoviesWithErrorHandling(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return new Error('Not found');
  }
}

export function fetchMoviesTrending() {
  return fetchMoviesWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
}

export function fetchSearchMovies(query) {
  return fetchMoviesWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&${query}&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchMoviesWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return fetchMoviesWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchMoviesWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}
