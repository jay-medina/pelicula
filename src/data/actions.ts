import { Movie } from "./types";

interface AddMovie {
    type: "movie/addMovie";
    payload: Movie;
}

interface UpdateMovie {
    type: "movie/updateMovie";
    payload: {
        id: string;
        title: string;
        rating: string;
        genre: string;
    };
}

interface UpdateSearchQuery {
    type: "movie/updateSearchQuery";
    payload: {
        query: string;
    };
}

export function addMovie(payload: AddMovie["payload"]): AddMovie {
    return {
        type: "movie/addMovie",
        payload,
    };
}

export function updateMovie(payload: UpdateMovie["payload"]): UpdateMovie {
    return {
        type: "movie/updateMovie",
        payload,
    };
}

export function updateSearchQuery(payload: UpdateSearchQuery["payload"]): UpdateSearchQuery {
    return {
        type: "movie/updateSearchQuery",
        payload,
    };
}

export type MovieAction = AddMovie | UpdateMovie;
export type SearchAction = UpdateSearchQuery;
