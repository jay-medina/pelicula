import { Movie } from "./types";

interface AddMovie {
    type: "movie/addMovie";
    payload: Movie;
}

export function addMovie(payload: AddMovie["payload"]): AddMovie {
    return {
        type: "movie/addMovie",
        payload,
    };
}

export type MovieAction = AddMovie;
