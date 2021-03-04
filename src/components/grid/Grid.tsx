import React, { useCallback, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "../../data/actions";
import { saveMovieToPlaylist } from "../../data/thunks";
import { isViewingSaved } from "../../data/selectors";
import { Movie } from "../../data/types";
import { Bookmark } from "../icons/icons";

import "./grid.css";

interface GridProps {
    movies: Movie[];
    query: string;
}

interface GridTitleProps {
    movies: Movie[];
    query: string;
}

interface GridItemProps {
    movie: Movie;
    onClick: () => void;
}

interface SaveButtonProps {
    movie: Movie;
}

export function Grid({ movies, query }: GridProps) {
    const dispatch = useDispatch();

    const onGridItemClick = useCallback(
        (id: string) => {
            dispatch(setSelectedMovie({ movieId: id }));
        },
        [dispatch]
    );

    return (
        <div className="app__grid">
            <GridTitle movies={movies} query={query} />
            <div className="app__grid_items">
                {movies.map((movie) => (
                    <GridItem key={movie.id} movie={movie} onClick={() => onGridItemClick(movie.id)} />
                ))}
            </div>
        </div>
    );
}

function GridTitle(props: GridTitleProps) {
    const viewSaved = useSelector(isViewingSaved);

    if (viewSaved) {
        return <GridSavedMoviesTitle {...props} />;
    }

    if (props.query.length === 0) {
        return <div className="app__grid_title">All Movies</div>;
    }

    if (props.movies.length === 0) {
        return <div className="app__grid_title app__grid_no_movies">No movies match {props.query}</div>;
    }

    return <div className="app__grid_title">{props.query} Movies</div>;
}

function GridSavedMoviesTitle(props: GridTitleProps) {
    if (props.movies.length === 0) {
        return <div className="app__grid_title app__grid_no_movies">No saved movies</div>;
    }

    return <div className="app__grid_title">Saved Playlist</div>;
}

function GridItem({ movie, onClick }: GridItemProps) {
    return (
        <div className="app__grid_item_container" onClick={onClick}>
            <div
                className="app__grid_item app__grid_item_background"
                style={{
                    backgroundImage: `url("${movie.poster}")`,
                }}
            >
                <div className="app__grid_item_fallback_text">
                    <div>
                        <span className="app__grid_item_title">{movie.title}</span>
                        <span>({movie.year})</span>
                    </div>
                    <SaveButton movie={movie} />
                </div>
            </div>
        </div>
    );
}

function SaveButton({ movie }: SaveButtonProps) {
    const dispatch = useDispatch();

    const onClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            dispatch(
                saveMovieToPlaylist({
                    movieId: movie.id,
                    save: !movie.saved,
                })
            );
        },
        [dispatch, movie.id, movie.saved]
    );

    return (
        <button className="app__no_style_button app__splash_save_button" onClick={onClick}>
            <Bookmark className="app__splash_save_icon" filled={movie.saved} />
        </button>
    );
}
