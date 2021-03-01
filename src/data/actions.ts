interface AddMovie {
    type: "movie/addMovie";
    payload: {
        id: string;
        title: string;
    };
}

export function addMovie(payload: AddMovie["payload"]): AddMovie {
    return {
        type: "movie/addMovie",
        payload,
    };
}

export type MovieAction = AddMovie;
