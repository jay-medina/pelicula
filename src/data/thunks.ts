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

    const [fileName] = poster.split("@._V1_");

    return [`${fileName}@._V1_SX600.jpg`, `${fileName}@._V1_SX900.jpg`];
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

export function searchForMovies(payload: SearchForMoviesPayload) {
    return async (dispatch: ThunkDispatch, getState: () => AppState) => {
        // const state = getState();

        // if (!morePokemonExist(state) || isLoading(state)) return;

        // dispatch(updateFetching({ fetching: true }));

        // const data = await search(payload);

        // const { results } = data;

        const search = [
            {
                Poster:
                    "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg",
                Title: "Soul",
                Type: "movie",
                Year: "2020",
                imdbID: "tt2948372",
            },
        ];

        search.map(responseToMovie).forEach((movie) => {
            dispatch(addMovie(movie));
        });

        // if any of them match fetch details

        // console.log("results", results);
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
