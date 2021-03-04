const MOVIE_API_KEY = "342dfc75";
const MOVIE_URL = "http://www.omdbapi.com/";
export async function search({query, page = 1}) {
  const urlToSend = `${MOVIE_URL}?apikey=${MOVIE_API_KEY}&s=${query}&type=movie&page=${page}`;
  const result = await fetch(urlToSend);
  if (result.ok) {
    return result.json();
  }
  throw new Error(result.statusText);
}
export async function searchDetailsById({id}) {
  const urlToSend = `${MOVIE_URL}?apikey=${MOVIE_API_KEY}&i=${id}`;
  const result = await fetch(urlToSend);
  if (result.ok) {
    return result.json();
  }
  throw new Error(result.statusText);
}
