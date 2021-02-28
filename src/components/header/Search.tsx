import React from "react";
import classNames from "classnames";
import { Search } from "../icons/icons";

type SearchBarProps = {
    className?: string;
    fullScreen?: boolean;
};

export function SearchBar(props: SearchBarProps) {
    const className = classNames("app__header_search", props.className);

    return (
        <div className={className}>
            <Search className="app__header_search_bar_icon" />
            <input className="app__header_search_input" placeholder="Search..."></input>
        </div>
    );
}
