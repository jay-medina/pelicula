import { AnyAction, Store } from "redux";
import { ThunkDispatch as ReduxThunkDispatch } from "redux-thunk";

export interface Movie {
    id: string;
    title: string;
    poster: string;
    mediumPoster: string;
    largePoster: string;
    type: string;
    year: string;
    rating?: string;
    genre?: string;
}

export interface SearchResults {
    query: string;
}

export type Movies = Record<Movie["id"], Movie>;

export interface AppState {
    movies: Movies;
    searchResults: SearchResults;
}

export type ThunkDispatch = ReduxThunkDispatch<AppState, unknown, AnyAction>;

export type AppStore = Store<AppState, AnyAction> & {
    dispatch: ThunkDispatch;
};
