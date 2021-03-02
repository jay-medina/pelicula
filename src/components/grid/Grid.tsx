import React from "react";
import { Movie } from "../../data/types";

import "./grid.css";

interface GridProps {
    movies: Movie[];
    onClick: (pos: number) => void;
}

interface GridItemProps {
    movie: Movie;
    onClick: () => void;
}

export function Grid({ movies, onClick }: GridProps) {
    return (
        <div className="app__grid">
            {movies.map((movie, index) => (
                <GridItem key={movie.id} movie={movie} onClick={() => onClick(index)} />
            ))}
        </div>
    );
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
