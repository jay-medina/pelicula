import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppState, AppStore, Movie } from "./data/types";
import { getSearchQuery } from "./data/selectors";

import { Header } from "./components/header/Header";
import { Splash } from "./components/splash/Splash";
import { Grid } from "./components/grid/Grid";
import { searchForMovies } from "./data/thunks";
import { getListOfMovies } from "./data/selectors";

interface Props {
    store: AppStore;
}

function MovieLayout() {
    const query = useSelector(getSearchQuery);
    const dispatch = useDispatch();
    const movies = useSelector<AppState, Movie[]>((state) => getListOfMovies(state, { query }));

    useEffect(() => {
        dispatch(searchForMovies({ query }));
    }, [dispatch, query]);

    // TODO Add a default state: Update the
    if (movies.length === 0) {
        return (
            <div className="app">
                <div>No Movies</div>
                <Header />
            </div>
        );
    }

    const [firstMovie] = movies;

    return (
        <div className="app">
            <Splash movie={firstMovie} />
            <Grid movies={movies} />
            <Header />
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
