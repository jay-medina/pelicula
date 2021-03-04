import thunk from "../../web_modules/redux-thunk.js";
import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from "../../web_modules/redux.js";
import {movies} from "./reducers/movieReducer.js";
import {searchResults} from "./reducers/searchReducer.js";
import {getPlaylist} from "./localStore.js";
export function createStore() {
  const createReduxEnhancers = () => applyMiddleware(thunk);
  const reducer = combineReducers({
    movies,
    searchResults
  });
  const initial = {
    movies: {
      allMovies: getPlaylist() || {}
    }
  };
  return reduxCreateStore(reducer, initial, createReduxEnhancers());
}
