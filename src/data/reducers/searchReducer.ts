import { SearchAction } from "../actions";
import { SearchResults } from "../types";

const initialState: SearchResults = {
    query: "batman",
};

export function searchResults(state = initialState, action: SearchAction): SearchResults {
    if (action.type === "movie/updateSearchQuery") {
        return {
            ...state,
            query: action.payload.query,
        };
    }

    return state;
}
