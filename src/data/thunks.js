import {search, searchDetailsById} from "./fetcher.js";
import {addMovie, updateMovie, updateSavedPlaylist} from "./actions.js";
import {getMovieRating} from "./selectors.js";
import {savePlaylist} from "./localStore.js";
const demoImg = "/images/movie.jpg";
function getOtherPosterSizes(res) {
  const poster = res.Poster;
  if (poster === "N/A") {
    return [demoImg, demoImg];
  }
  const [fileName] = poster.split("._V1_");
  return [`${fileName}._V1_SX600.jpg`, `${fileName}._V1_SX900.jpg`];
}
function responseToMovie(res) {
  const [medium, large] = getOtherPosterSizes(res);
  const poster = res.Poster === "N/A" ? demoImg : res.Poster;
  return {
    id: res.imdbID,
    title: res.Title,
    type: res.Type,
    year: res.Year,
    poster,
    mediumPoster: medium,
    largePoster: large,
    saved: false
  };
}
function searchAndAddMovies(payload) {
  return async (dispatch) => {
    const {query} = payload;
    if (!query)
      return;
    const data = await search({query, page: payload.page});
    const {Search} = data;
    if (!Search)
      return;
    const asMovie = Search.map(responseToMovie);
    asMovie.forEach((movie) => {
      dispatch(addMovie(movie));
    });
  };
}
export function searchForMovies(payload) {
  return (dispatch) => Promise.all([
    dispatch(searchAndAddMovies({query: payload.query, page: 1})),
    dispatch(searchAndAddMovies({query: payload.query, page: 2})),
    dispatch(searchAndAddMovies({query: payload.query, page: 3})),
    dispatch(searchAndAddMovies({query: payload.query, page: 4})),
    dispatch(searchAndAddMovies({query: payload.query, page: 5}))
  ]);
}
export function searchForMovieById(payload) {
  return async (dispatch, getState) => {
    const state = getState();
    const rating = getMovieRating(state, payload);
    if (rating)
      return;
    const data = await searchDetailsById(payload);
    dispatch(updateMovie({
      id: data.imdbID,
      title: data.Title,
      rating: data.Rated,
      genre: data.Genre,
      plot: data.Plot,
      actors: data.Actors,
      director: data.Director,
      writer: data.Writer
    }));
  };
}
export function saveMovieToPlaylist(payload) {
  return async (dispatch, getState) => {
    dispatch(updateSavedPlaylist(payload));
    savePlaylist(getState());
  };
}
