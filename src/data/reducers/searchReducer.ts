import { SearchAction } from "../actions";
import { SearchResults } from "../types";

const initialState: SearchResults = {
    query: "batman",
    isLoading: false,
    viewSaved: false,
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

    if (action.type === "movie/viewSaved") {
        return {
            ...state,
            viewSaved: action.payload.view,
        };
    }

    return state;
}
