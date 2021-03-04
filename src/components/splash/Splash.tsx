import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Movie } from "../../data/types";
import { searchForMovieById } from "../../data/thunks";
import { updateSavedPlaylist } from "../../data/actions";
import { Bookmark, ChevronDown, ChevronUp } from "../icons/icons";

import "./splash.css";

interface SplashProps {
    movie: Movie;
}

interface SaveButtonProps {
    movie: Movie;
}

interface MoreInfoBtnProps {
    viewMoreInfo: boolean;
    onClick: () => void;
}

interface MoreInfoProps {
    movie: Movie;
    viewMoreInfo: boolean;
}

export function Splash({ movie }: SplashProps) {
    const [viewMoreInfo, setViewMoreInfo] = useState(false);

    const className = classNames("app__splash", {
        app__splash_open: viewMoreInfo,
    });

    return (
        <div className={className}>
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
                <MoreInfo movie={movie} viewMoreInfo={viewMoreInfo} />
            </div>
            <MoreInfoBtn viewMoreInfo={viewMoreInfo} onClick={() => setViewMoreInfo(!viewMoreInfo)} />
        </div>
    );
}

function MoreInfo({ movie, viewMoreInfo }: MoreInfoProps) {
    const className = classNames("app__splash_more_info", {
        app__splash_more_info_show: viewMoreInfo,
    });

    return (
        <div className={className}>
            <div className="app__splash_more_info_overview">
                <div className="app__splash_more_info_title">Overview</div>
                <div>{movie.plot}</div>
            </div>
            <div className="app__splash_more_info_section">
                <div>
                    <div className="app__splash_more_info_title">Actors</div>
                    <div>{movie.actors}</div>
                </div>
                <div>
                    <div className="app__splash_more_info_title">Directors</div>
                    <div>{movie.director}</div>
                </div>
                <div>
                    <div className="app__splash_more_info_title">Writers</div>
                    <div>{movie.writer}</div>
                </div>
            </div>
        </div>
    );
}

function MoreInfoBtn({ viewMoreInfo, onClick }: MoreInfoBtnProps) {
    return (
        <div className="app__splash_more_info_btn_container">
            <button className="app__splash_more_btn" onClick={onClick}>
                {viewMoreInfo ? (
                    <ChevronUp className="app__splash_more_icon" />
                ) : (
                    <ChevronDown className="app__splash_more_icon" />
                )}
            </button>
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
