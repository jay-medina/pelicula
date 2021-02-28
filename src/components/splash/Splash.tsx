import React from "react";

import "./splash.css";

interface SplashProps {
    imageUrl: string;
    year: string;
    title: string;
    genre: string;
    rated: string;
}

export function Splash(props: SplashProps) {
    return (
        <div className="app__splash">
            <div
                className="app__splash_img"
                style={{
                    backgroundImage: `url("${props.imageUrl}")`,
                }}
            ></div>
            <div className="app__splash_content">
                <div>
                    <span className="app__splash_title">{props.title}</span> ({props.year})
                </div>
                <div className="app__splash_info">
                    <Rating rated={props.rated} />
                    <span className="app__splash_genre">{props.genre}</span>
                </div>
            </div>
        </div>
    );
}

function Rating({ rated }: { rated: string }) {
    return <div className="app__rating">{rated}</div>;
}
