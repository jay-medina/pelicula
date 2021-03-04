import { MovieAction } from "../actions";
import { Movies } from "../types";

const initialState: Movies = {
    allMovies: {},
};

export function movies(state = initialState, action: MovieAction): Movies {
    if (action.type === "movie/addMovie") {
        const { payload } = action;
        const oldMovie = state.allMovies[payload.id];

        // dont add it if it already exists
        if (oldMovie) {
            return state;
        }

        return {
            ...state,
            allMovies: {
                ...state.allMovies,
                [payload.id]: payload,
            },
        };
    }

    if (action.type === "movie/updateMovie") {
        const { payload } = action;

        const oldMovie = state.allMovies[payload.id];

        return {
            ...state,
            allMovies: {
                ...state.allMovies,
                [payload.id]: {
                    ...oldMovie,
                    ...payload,
                },
            },
        };
    }

    if (action.type === "movie/updateSavedPlaylist") {
        const { payload } = action;

        const movie = state.allMovies[payload.movieId];

        if (!movie) return state;

        return {
            ...state,
            allMovies: {
                ...state.allMovies,
                [movie.id]: {
                    ...movie,
                    saved: payload.save,
                },
            },
        };
    }

    if (action.type === "movie/setSelected") {
        const { payload } = action;

        return {
            ...state,
            selectedMovieId: payload.movieId,
        };
    }

    if (action.type === "movie/resetSelected") {
        return {
            ...state,
            selectedMovieId: undefined,
        };
    }

    return state;
}
