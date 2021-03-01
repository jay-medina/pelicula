import { search, searchDetailsById } from "./fetcher";
import { addMovie, updateMovie } from "./actions";
import { AppState, ThunkDispatch, Movie } from "./types";
import { getMovieRating } from "./selectors";

interface SearchForMoviesPayload {
    query: string;
    page?: number;
}

interface SearchForMovieByIdPayload {
    id: string;
}

interface MovieResponse {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

// Larger posters are prefixed with 600 and 900
function getOtherPosterSizes(res: MovieResponse): [string, string] {
    // @._V1_SX300.jpg

    const poster = res.Poster;

    const [fileName] = poster.split("._V1_");

    return [`${fileName}._V1_SX600.jpg`, `${fileName}._V1_SX900.jpg`];
}

function responseToMovie(res: MovieResponse): Movie {
    const [medium, large] = getOtherPosterSizes(res);

    return {
        id: res.imdbID,
        title: res.Title,
        type: res.Type,
        year: res.Year,
        poster: res.Poster,
        mediumPoster: medium,
        largePoster: large,
    };
}

function searchAndAddMovies(payload: SearchForMoviesPayload) {
    return async (dispatch: ThunkDispatch) => {
        // if (!morePokemonExist(state) || isLoading(state)) return;

        // dispatch(updateFetching({ fetching: true }));

        const data = await search(payload);

        const { Search } = data;

        const asMovie = Search.map(responseToMovie);

        asMovie.forEach((movie) => {
            dispatch(addMovie(movie));

            if (movie.title.toLowerCase() === payload.query.toLowerCase()) {
                dispatch(searchForMovieById({ id: movie.id }));
            }
        });

        console.log("results", data);
    };
}

export function searchForMovies(payload: SearchForMoviesPayload) {
    return async (dispatch: ThunkDispatch) => {
        // if (!morePokemonExist(state) || isLoading(state)) return;

        // dispatch(updateFetching({ fetching: true }));

        dispatch(searchAndAddMovies({ query: payload.query, page: 1 }));
        dispatch(searchAndAddMovies({ query: payload.query, page: 2 }));
        dispatch(searchAndAddMovies({ query: payload.query, page: 3 }));
        dispatch(searchAndAddMovies({ query: payload.query, page: 4 }));
        dispatch(searchAndAddMovies({ query: payload.query, page: 5 }));
    };
}

export function searchForMovieById(payload: SearchForMovieByIdPayload) {
    return async (dispatch: ThunkDispatch, getState: () => AppState) => {
        const state = getState();

        const rating = getMovieRating(state, payload);

        // if we have the rating, we have already fetched this data
        if (rating) return;

        const data = await searchDetailsById(payload);

        dispatch(
            updateMovie({
                id: data.imdbID,
                title: data.Title,
                rating: data.Rated,
                genre: data.Genre,
            })
        );
    };
}
