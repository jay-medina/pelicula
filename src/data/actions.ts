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

interface UpdateSavedPlaylist {
    type: "movie/updateSavedPlaylist";
    payload: {
        movieId: string;
        save: boolean;
    };
}

interface UpdateSearchQuery {
    type: "movie/updateSearchQuery";
    payload: {
        query: string;
    };
}

interface SetLoading {
    type: "movie/setLoading";
    payload: {
        isLoading: boolean;
    };
}

interface SetViewSaved {
    type: "movie/viewSaved";
    payload: {
        view: boolean;
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

export function updateSavedPlaylist(payload: UpdateSavedPlaylist["payload"]): UpdateSavedPlaylist {
    return {
        type: "movie/updateSavedPlaylist",
        payload,
    };
}

export function updateSearchQuery(payload: UpdateSearchQuery["payload"]): UpdateSearchQuery {
    return {
        type: "movie/updateSearchQuery",
        payload,
    };
}

export function setLoading(payload: SetLoading["payload"]): SetLoading {
    return {
        type: "movie/setLoading",
        payload,
    };
}

export function setViewSaved(payload: SetViewSaved["payload"]): SetViewSaved {
    return {
        type: "movie/viewSaved",
        payload,
    };
}

export type MovieAction = AddMovie | UpdateMovie | UpdateSavedPlaylist;
export type SearchAction = UpdateSearchQuery | SetLoading | SetViewSaved;
