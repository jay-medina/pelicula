/**
 * This is not the d̶r̶o̶i̶d̶s̶ key you are looking for. *Hand waves*
 */
const MOVIE_API_KEY = "342dfc75";
const MOVIE_URL = "http://www.omdbapi.com/";

interface SearchForMoviesPayload {
    query: string;
    page?: number;
}

async function searchForMovies({ query, page = 1 }: SearchForMoviesPayload): Promise<any> {
    const urlToSend = `${MOVIE_URL}?s=${query}&page=${page}`;

    const result = await fetch(urlToSend);

    if (result.ok) {
        return result.json();
    }

    throw new Error(result.statusText);
}
