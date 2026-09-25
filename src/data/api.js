const API_KEY = "8b04300c4c9959f87c396ee598264dd7";

// Popular Movies
export const PopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  return data.results;
};

// New / Latest Movies
export const NewMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  return data.results;
};

// Upcoming Movies
export const UpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  return data.results;
};

// Top Rated
export const TopRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  return data.results;
};

const SEARCH = "8b04300c4c9959f87c396ee598264dd7";

export async function SearchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${SEARCH}&query=${encodeURIComponent(query)}`
  );

  const data2 = await response.json();

  return data2.results;
}