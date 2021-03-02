import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppState, AppStore, Movie } from "./data/types";
import { getSearchQuery, isLoading } from "./data/selectors";

import { Header } from "./components/header/Header";
import { Splash } from "./components/splash/Splash";
import { Grid } from "./components/grid/Grid";
import { searchForMovies } from "./data/thunks";
import { getListOfMovies } from "./data/selectors";
import { LoadingScreen } from "./components/loading/loading";
import { setLoading } from "./data/actions";

interface Props {
    store: AppStore;
}

function MovieLayout() {
    const [pos, setPos] = useState(0);
    const query = useSelector(getSearchQuery);
    const loading = useSelector(isLoading);
    const dispatch = useDispatch();
    const movies = useSelector<AppState, Movie[]>((state) => getListOfMovies(state, { query }));

    useEffect(() => {
        async function search() {
            dispatch(setLoading({ isLoading: true }));
            await dispatch(searchForMovies({ query }));
            dispatch(setLoading({ isLoading: false }));
        }

        setPos(0);
        search();
    }, [dispatch, query]);

    // TODO Add a default state: Update the
    if (movies.length === 0) {
        return (
            <div className="app">
                <div>No Movies</div>
                <Header />
                <LoadingScreen isLoading={loading} />
            </div>
        );
    }

    const selectedMovie = movies[pos];

    return (
        <div className="app">
            <Splash movie={selectedMovie} />
            <Grid movies={movies} onClick={setPos} />
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
