import thunk from "redux-thunk";
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { ThunkDispatch, AppStore, AppState } from "./types";
import { movies } from "./reducer";

export function createStore(): AppStore {
    const createReduxEnhancers = () => applyMiddleware<ThunkDispatch>(thunk);

    const reducer = combineReducers<AppState>({
        movies,
    });

    // TODO populate saved list from local storage
    const initial = {};

    return reduxCreateStore(reducer, initial, createReduxEnhancers());
}
