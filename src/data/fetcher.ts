/**
 * This is not the d̶r̶o̶i̶d̶s̶ key you are looking for. *Hand waves*
 */
const MOVIE_API_KEY = "342dfc75";
const MOVIE_URL = "http://www.omdbapi.com/";

interface SearchForMoviesPayload {
    query: string;
    page?: number;
}

interface SearchByIdPayload {
    id: string;
}

interface MovieResponse {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

interface SearchResponse {
    Response: "True" | "False";
    Search?: MovieResponse[];
    totalResults: string;
    Error?: string;
}

interface SearchDetailsResponse {
    Response: "True";
    Title: string;
    Rated: string;
    Genre: string;
    imdbID: string;
    Actors: string;
    Director: string;
    Plot: string;
    Writer: string;
}

export async function search({ query, page = 1 }: SearchForMoviesPayload): Promise<SearchResponse> {
    const urlToSend = `${MOVIE_URL}?apikey=${MOVIE_API_KEY}&s=${query}&type=movie&page=${page}`;

    const result = await fetch(urlToSend);

    if (result.ok) {
        return result.json();
    }

    throw new Error(result.statusText);
}

export async function searchDetailsById({ id }: SearchByIdPayload): Promise<SearchDetailsResponse> {
    const urlToSend = `${MOVIE_URL}?apikey=${MOVIE_API_KEY}&i=${id}`;

    const result = await fetch(urlToSend);

    if (result.ok) {
        return result.json();
    }

    throw new Error(result.statusText);
}
