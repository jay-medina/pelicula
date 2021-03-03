import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppState, AppStore, Movie } from "./data/types";
import { getSearchQuery, getSelectedMovie, isLoading } from "./data/selectors";

import { Header } from "./components/header/Header";
import { Splash } from "./components/splash/Splash";
import { Grid } from "./components/grid/Grid";
import { searchForMovies } from "./data/thunks";
import { getListOfMovies } from "./data/selectors";
import { LoadingScreen } from "./components/loading/loading";
import { resetSelectedMovie, setLoading } from "./data/actions";

interface Props {
    store: AppStore;
}

function MovieLayout() {
    const [initialLoad, setInitialLoad] = useState(true);
    const currentSelectedMovie = useSelector(getSelectedMovie);
    const query = useSelector(getSearchQuery);
    const loading = useSelector(isLoading);
    const dispatch = useDispatch();
    const movies = useSelector<AppState, Movie[]>((state) => getListOfMovies(state, { query }));

    useEffect(() => {
        async function search() {
            dispatch(setLoading({ isLoading: true }));
            await dispatch(searchForMovies({ query }));
            setInitialLoad(false);
            dispatch(setLoading({ isLoading: false }));
        }

        dispatch(resetSelectedMovie());
        search();
    }, [dispatch, query]);

    if (initialLoad) {
        return (
            <div className="app">
                <Header />
                <LoadingScreen isLoading={loading} />
            </div>
        );
    }

    if (movies.length === 0) {
        return (
            <div className="app">
                <Grid movies={movies} query={query} />
                <Header />
                <LoadingScreen isLoading={loading} />
            </div>
        );
    }

    const selectedMovie = currentSelectedMovie || movies[0];

    return (
        <div className="app">
            <Splash movie={selectedMovie} />
            <Grid movies={movies} query={query} />
            <Header />
            <LoadingScreen isLoading={loading} />
        </div>
    );
}

export function MovieApp({ store }: Props) {
    return (
        <Provider store={store}>
            <MovieLayout />
        </Provider>
    );
}
