import React from "react";
import classNames from "classnames";
import { Star } from "../icons/icons";

interface LoadingScreenProps {
    isLoading: boolean;
}
export function LoadingScreen({ isLoading }: LoadingScreenProps) {
    const className = classNames("app__loading_screen", {
        app__loading_screen_show: isLoading,
    });
    return (
        <div className={className}>
            <div className="app__loading_text">Searching</div> <Star className="app__loading_star" />
        </div>
    );
}
