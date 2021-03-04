export function addMovie(payload) {
  return {
    type: "movie/addMovie",
    payload
  };
}
export function updateMovie(payload) {
  return {
    type: "movie/updateMovie",
    payload
  };
}
export function updateSavedPlaylist(payload) {
  return {
    type: "movie/updateSavedPlaylist",
    payload
  };
}
export function updateSearchQuery(payload) {
  return {
    type: "movie/updateSearchQuery",
    payload
  };
}
export function setLoading(payload) {
  return {
    type: "movie/setLoading",
    payload
  };
}
export function setViewSaved(payload) {
  return {
    type: "movie/viewSaved",
    payload
  };
}
export function setSelectedMovie(payload) {
  return {
    type: "movie/setSelected",
    payload
  };
}
export function resetSelectedMovie() {
  return {
    type: "movie/resetSelected"
  };
}
