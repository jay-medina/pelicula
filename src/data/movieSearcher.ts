import { addMovie } from "./actions";
import { AppState, ThunkDispatch, Movie } from "./types";

/**
 * This is not the d̶r̶o̶i̶d̶s̶ key you are looking for. *Hand waves*
 */
const MOVIE_API_KEY = "342dfc75";
const MOVIE_URL = "http://www.omdbapi.com/";

interface SearchForMoviesPayload {
    query: string;
    page?: number;
}

interface MovieResponse {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

interface SearchResponse {
    Response: "True";
    Search: MovieResponse[];
    totalResults: string;
}

async function search({ query, page = 1 }: SearchForMoviesPayload): Promise<SearchResponse> {
    const urlToSend = `${MOVIE_URL}?apikey=${MOVIE_API_KEY}&s=${query}&page=${page}`;

    const result = await fetch(urlToSend);

    if (result.ok) {
        return result.json();
    }

    throw new Error(result.statusText);
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

        // console.log("results", results);
    };
}
