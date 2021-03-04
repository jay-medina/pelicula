import React, {useEffect, useState} from "../web_modules/react.js";
import {Provider, useDispatch, useSelector} from "../web_modules/react-redux.js";
import {getSearchQuery, getSelectedMovie, isLoading} from "./data/selectors.js";
import {Header} from "./components/header/Header.js";
import {Splash} from "./components/splash/Splash.js";
import {Grid} from "./components/grid/Grid.js";
import {searchForMovies} from "./data/thunks.js";
import {getListOfMovies} from "./data/selectors.js";
import {LoadingScreen} from "./components/loading/loading.js";
import {resetSelectedMovie, setLoading} from "./data/actions.js";
import {Footer} from "./components/footer/footer.js";
function MovieLayout() {
  const [initialLoad, setInitialLoad] = useState(true);
  const currentSelectedMovie = useSelector(getSelectedMovie);
  const query = useSelector(getSearchQuery);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const movies = useSelector((state) => getListOfMovies(state, {query}));
  useEffect(() => {
    async function search() {
      dispatch(setLoading({isLoading: true}));
      await dispatch(searchForMovies({query}));
      setInitialLoad(false);
      dispatch(setLoading({isLoading: false}));
    }
    dispatch(resetSelectedMovie());
    search();
  }, [dispatch, query]);
  if (initialLoad) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "app"
    }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(LoadingScreen, {
      isLoading: loading
    }));
  }
  if (movies.length === 0) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "app"
    }, /* @__PURE__ */ React.createElement(Grid, {
      movies,
      query
    }), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(LoadingScreen, {
      isLoading: loading
    }));
  }
  const selectedMovie = currentSelectedMovie || movies[0];
  return /* @__PURE__ */ React.createElement("div", {
    className: "app"
  }, /* @__PURE__ */ React.createElement(Splash, {
    movie: selectedMovie
  }), /* @__PURE__ */ React.createElement(Grid, {
    movies,
    query
  }), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(LoadingScreen, {
    isLoading: loading
  }));
}
export function MovieApp({store}) {
  return /* @__PURE__ */ React.createElement(Provider, {
    store
  }, /* @__PURE__ */ React.createElement(MovieLayout, null), /* @__PURE__ */ React.createElement(Footer, null));
}
