import { MovieAction } from "./actions";
import { Movies } from "./types";

const initialState: Movies = {};

export function movies(state = initialState, action: MovieAction): Movies {
    if (action.type === "movie/addMovie") {
        const { payload } = action;
        const oldMovie = state[payload.id];

        // dont add it if it already exists
        if(oldMovie) {
            return state;
        }

        return {
            ...state,
            [payload.id]: payload,
        };
    }

    if (action.type === "movie/updateMovie") {
        const { payload } = action;

        const oldMovie = state[payload.id];

        return {
            ...state,
            [payload.id]: {
                ...oldMovie,
                title: payload.title,
                rating: payload.rating,
                genre: payload.genre,
            },
        };
    }
    return state;
}
