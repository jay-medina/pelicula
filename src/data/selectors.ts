import { AppState, Movie } from "./types";

interface GetListOfMoviesPayload {
    query?: string;
}

interface GetMoviePayload {
    id: string;
}

/**
 * Returns a list of movies that match the search query
 * If query is empty, just return the first 1000
 */
export function getListOfMovies(state: AppState, { query }: GetListOfMoviesPayload): Movie[] {
    if (isViewingSaved(state)) {
        return getSavedMovies(state);
    }

    const movies = Object.values(state.movies);

    if (!query) return movies.slice(0, 1000);

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

export function getSavedMovies(state: AppState): Movie[] {
    const allMovies = Object.values(state.movies);

    return allMovies.filter((movie) => movie.saved);
}

export function getMovieRating(state: AppState, payload: GetMoviePayload): Movie["rating"] {
    return state.movies[payload.id]?.rating;
}

export function getSearchQuery(state: AppState): string {
    return state.searchResults.query;
}

export function isLoading(state: AppState): boolean {
    return state.searchResults.isLoading;
}

export function isViewingSaved(state: AppState): boolean {
    return state.searchResults.viewSaved;
}
