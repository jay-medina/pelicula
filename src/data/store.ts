import thunk from "redux-thunk";
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { ThunkDispatch, AppStore, AppState } from "./types";
import { movies } from "./reducers/movieReducer";
import { searchResults } from "./reducers/searchReducer";

export function createStore(): AppStore {
    const createReduxEnhancers = () => applyMiddleware<ThunkDispatch>(thunk);

    const reducer = combineReducers<AppState>({
        movies,
        searchResults,
    });

    // TODO populate saved list from local storage
    const initial = {};

    return reduxCreateStore(reducer, initial, createReduxEnhancers());
}
