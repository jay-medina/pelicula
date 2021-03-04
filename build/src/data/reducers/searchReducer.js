const initialState = {
  query: "batman",
  isLoading: false,
  viewSaved: false
};
export function searchResults(state = initialState, action) {
  if (action.type === "movie/updateSearchQuery") {
    return {
      ...state,
      query: action.payload.query
    };
  }
  if (action.type === "movie/setLoading") {
    return {
      ...state,
      isLoading: action.payload.isLoading
    };
  }
  if (action.type === "movie/viewSaved") {
    return {
      ...state,
      viewSaved: action.payload.view
    };
  }
  return state;
}
