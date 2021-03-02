import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Movie } from "../../data/types";
import { searchForMovieById } from "../../data/thunks";

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
                    <Rating movie={movie} />
                    <span className="app__splash_genre">{movie.genre}</span>
                </div>
            </div>
        </div>
    );
}

interface RatingProps {
    movie: Movie;
}

function Rating({ movie }: RatingProps) {
    const dispatch = useDispatch();

    const fetchDetailInfo = useCallback(
        (id: string) => {
            dispatch(searchForMovieById({ id }));
        },
        [dispatch]
    );

    useEffect(() => {
        if (!movie.rating) {
            fetchDetailInfo(movie.id);
        }
    }, [dispatch, fetchDetailInfo, movie]);

    if (!movie.rating) return null;

    return <div className="app__rating">{movie.rating}</div>;
}
