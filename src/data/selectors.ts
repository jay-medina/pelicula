import { AppState, Movie } from "./types";

interface GetListOfMoviesPayload {
    query?: string;
}

interface GetMoviePayload {
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

    const queryLowerCased = query.toLowerCase();

    for (const movie of movies) {
        const titleLowerCased = movie.title.toLowerCase();

        if (titleLowerCased === queryLowerCased) {
            li.unshift(movie);
        } else if (titleLowerCased.includes(queryLowerCased)) {
            li.push(movie);
        }
    }

    return li;
}

export function getMovieRating(state: AppState, payload: GetMoviePayload): Movie["rating"] {
    return state.movies[payload.id]?.rating;
}
