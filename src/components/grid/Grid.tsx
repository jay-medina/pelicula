import React from "react";
import { useSelector } from "react-redux";
import { isViewingSaved } from "../../data/selectors";
import { Movie } from "../../data/types";

import "./grid.css";

interface GridProps {
    movies: Movie[];
    query: string;
    onClick: (pos: number) => void;
}

interface GridTitleProps {
    movies: Movie[];
    query: string;
}

interface GridItemProps {
    movie: Movie;
    onClick: () => void;
}

export function Grid({ movies, onClick, query }: GridProps) {
    return (
        <div className="app__grid">
            <GridTitle movies={movies} query={query} />
            <div className="app__grid_items">
                {movies.map((movie, index) => (
                    <GridItem key={movie.id} movie={movie} onClick={() => onClick(index)} />
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
                <span className="app__grid_item_fallback_text">
                    <span className="app__grid_item_title">{movie.title}</span> ({movie.year})
                </span>
            </div>
        </div>
    );
    return <div>{movie.title}</div>;
}
