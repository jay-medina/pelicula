import { AnyAction, Store } from "redux";
import { ThunkDispatch as ReduxThunkDispatch } from "redux-thunk";

interface Movie {
    id: string;
    title: string;
}

export type Movies = Record<Movie["id"], Movie>;

export interface AppState {
    movies: Movies;
}

export type ThunkDispatch = ReduxThunkDispatch<AppState, unknown, AnyAction>;

export type AppStore = Store<AppState, AnyAction> & {
    dispatch: ThunkDispatch;
};
