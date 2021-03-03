import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Movie } from "../../data/types";
import { searchForMovieById } from "../../data/thunks";
import { updateSavedPlaylist } from "../../data/actions";
import { Bookmark } from "../icons/icons";

import "./splash.css";

interface SplashProps {
    movie: Movie;
}

interface SaveButtonProps {
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
                    <span className="app__splash_title">{movie.title}</span>
                    <span>({movie.year})</span>
                    <SaveButton movie={movie} />
                </div>
                <div className="app__splash_info">
                    <Rating movie={movie} />
                    <span className="app__splash_genre">{movie.genre}</span>
                </div>
            </div>
        </div>
    );
}

function SaveButton({ movie }: SaveButtonProps) {
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        dispatch(
            updateSavedPlaylist({
                movieId: movie.id,
                save: !movie.saved,
            })
        );
    }, [dispatch, movie.id, movie.saved]);

    return (
        <button className="app__no_style_button app__splash_save_button" onClick={onClick}>
            <Bookmark className="app__splash_save_icon" filled={movie.saved} />
        </button>
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
