import thunk from "redux-thunk";
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { ThunkDispatch, AppStore, AppState } from "./types";
import { movies } from "./reducers/movieReducer";
import { searchResults } from "./reducers/searchReducer";
import { getPlaylist } from "./localStore";

export function createStore(): AppStore {
    const createReduxEnhancers = () => applyMiddleware<ThunkDispatch>(thunk);

    const reducer = combineReducers<AppState>({
        movies,
        searchResults,
    });

    const initial: Partial<AppState> = {
        movies: {
            allMovies: getPlaylist() || {},
        },
    };

    return reduxCreateStore(reducer, initial, createReduxEnhancers());
}
