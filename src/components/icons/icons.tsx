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

type StarProps = {
    className?: string;
};

export function Star(props: StarProps) {
    const className = classNames("star__icon", props.className);

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    );
}
