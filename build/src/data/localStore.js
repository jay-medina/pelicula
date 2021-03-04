import {getSavedMovies} from "./selectors.js";
const savedMovieKey = "movie-playlist";
export function savePlaylist(state) {
  const savedMovies = getSavedMovies(state);
  const saveState = JSON.stringify({
    savedMovies
  });
  localStorage.setItem(savedMovieKey, saveState);
}
export function getPlaylist() {
  const data = localStorage.getItem(savedMovieKey);
  if (data) {
    const {savedMovies} = JSON.parse(data);
    return convertListToRecord(savedMovies);
  }
  return void 0;
}
function convertListToRecord(movies) {
  const items = {};
  for (const m of movies) {
    items[m.id] = m;
  }
  return items;
}
