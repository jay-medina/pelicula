import { AppState, Movie } from "./types";
import { getSavedMovies } from "./selectors";

const savedMovieKey = "movie-playlist";

export function savePlaylist(state: AppState) {
    const savedMovies = getSavedMovies(state);

    const saveState = JSON.stringify({
        savedMovies,
    });

    localStorage.setItem(savedMovieKey, saveState);
}

export function getPlaylist(): Record<string, Movie> | undefined {
    const data = localStorage.getItem(savedMovieKey);

    if (data) {
        const { savedMovies } = JSON.parse(data);

        return convertListToRecord(savedMovies);
    }

    return undefined;
}

function convertListToRecord(movies: Movie[]): Record<string, Movie> {
    const items: Record<string, Movie> = {};

    for (const m of movies) {
        items[m.id] = m;
    }

    return items;
}
