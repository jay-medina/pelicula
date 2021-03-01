import React from "react";
import { Movie } from "../../data/types";

import "./grid.css";

interface GridProps {
    movies: Movie[];
}

interface GridItemProps {
    movie: Movie;
}

export function Grid({ movies }: GridProps) {
    return (
        <div className="app__grid">
            {movies.map((movie) => (
                <GridItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

function GridItem({ movie }: GridItemProps) {
    return (
        <div className="app__grid_item_container">
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
