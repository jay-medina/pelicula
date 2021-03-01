import React from "react";
import { Movie } from "../../data/types";

import "./splash.css";

interface SplashProps {
    movie: Movie;
}

export function Splash({ movie }: SplashProps) {
    return (
        <div className="app__splash">
            <div
                className="app__splash_img"
                style={{
                    backgroundImage: `url("${movie.largePoster}")`,
                }}
            ></div>
            <div className="app__splash_content">
                <div>
                    <span className="app__splash_title">{movie.title}</span> ({movie.year})
                </div>
                <div className="app__splash_info">
                    <Rating rating={movie.rating} />
                    <span className="app__splash_genre">{movie.genre}</span>
                </div>
            </div>
        </div>
    );
}

interface RatingProps {
    rating: Movie["rating"];
}

function Rating({ rating }: RatingProps) {
    if (!rating) return null;

    return <div className="app__rating">{rating}</div>;
}
