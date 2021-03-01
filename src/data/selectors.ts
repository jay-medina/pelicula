import { AppState, Movie } from "./types";

interface GetListOfMoviesPayload {
    query?: string;
}

interface GetMovieRatingPayload {
    id: string;
}

/**
 * Returns a list of movies that match the search query
 * If query is empty, just return the first 100
 */
export function getListOfMovies(state: AppState, { query }: GetListOfMoviesPayload): Movie[] {
    const movies = Object.values(state.movies);

    if (!query) return movies.slice(0, 100);

    // we want to put exact matches first then fuzzy matches
    const li: Movie[] = [];

    for (const movie of movies) {
        if (movie.title === query) {
            li.unshift(movie);
        } else if (movie.title.includes(query)) {
            li.push(movie);
        }
    }

    return li;
}

export function getMovieRating(state: AppState, { id }: GetMovieRatingPayload): Movie["rating"] {
    return state.movies[id]?.rating;
}
