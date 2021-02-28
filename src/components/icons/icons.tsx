/*
  All icons are from https://heroicons.com/
*/
import React from "react";
import classNames from "classnames";

import "./icon.css";

type BookmarkProps = {
    className?: string;
    filled?: boolean;
};

export function Bookmark(props: BookmarkProps) {
    const className = classNames("bookmark__icon", props.className);
    const fill = props.filled ? "currentColor" : "none";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
        </svg>
    );
}

export function BookmarkSaved(props: BookmarkProps) {
    return <Bookmark {...props} filled />;
}

type SearchProps = {
    className?: string;
};

export function Search(props: SearchProps) {
    const className = classNames("search__icon", props.className);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
}
