import { SearchAction } from "../actions";
import { SearchResults } from "../types";

const initialState: SearchResults = {
    query: "batman",
    isLoading: false,
};

export function searchResults(state = initialState, action: SearchAction): SearchResults {
    if (action.type === "movie/updateSearchQuery") {
        return {
            ...state,
            query: action.payload.query,
        };
    }

    if (action.type === "movie/setLoading") {
        return {
            ...state,
            isLoading: action.payload.isLoading,
        };
    }

    return state;
}
