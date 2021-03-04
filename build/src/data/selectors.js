export function getListOfMovies(state, {query}) {
  if (isViewingSaved(state)) {
    return getSavedMovies(state);
  }
  const movies = Object.values(state.movies.allMovies);
  if (!query)
    return movies.slice(0, 1e3);
  const li = [];
  const queryLowerCased = query.toLowerCase();
  for (const movie of movies) {
    const titleLowerCased = movie.title.toLowerCase();
    if (titleLowerCased === queryLowerCased || titleLowerCased.includes(queryLowerCased)) {
      li.push(movie);
    }
  }
  return li;
}
export function getSavedMovies(state) {
  const allMovies = Object.values(state.movies.allMovies);
  return allMovies.filter((movie) => movie.saved);
}
export function getSelectedMovie(state) {
  const {selectedMovieId, allMovies} = state.movies;
  if (!selectedMovieId)
    return;
  return allMovies[selectedMovieId];
}
export function getMovieRating(state, payload) {
  return state.movies.allMovies[payload.id]?.rating;
}
export function getSearchQuery(state) {
  return state.searchResults.query;
}
export function isLoading(state) {
  return state.searchResults.isLoading;
}
export function isViewingSaved(state) {
  return state.searchResults.viewSaved;
}
