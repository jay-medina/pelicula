import { MovieAction } from "./actions";
import { Movies } from "./types";

const initialState: Movies = {};

export function movies(state = initialState, action: MovieAction): Movies {
    if (action.type === "movie/addMovie") {
        const { payload } = action;
        return {
            ...state,
            [payload.id]: payload,
        };
    }
    return state;
}
