import React, { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Search } from "../icons/icons";
import { getSearchQuery } from "../../data/selectors";
import { updateSearchQuery } from "../../data/actions";

type SearchBarProps = {
    className?: string;
    fullScreen?: boolean;
};

export function SearchBar(props: SearchBarProps) {
    const dispatch = useDispatch();
    const searchQuery = useSelector(getSearchQuery);
    const className = classNames("app__header_search", props.className);

    const onSearch = useCallback(
        (query = "") => {
            dispatch(updateSearchQuery({ query }));
        },
        [dispatch]
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.currentTarget.value);
    };

    return (
        <div className={className}>
            <Search className="app__header_search_bar_icon" />
            <input
                className="app__header_search_input"
                placeholder="Search..."
                value={searchQuery}
                onChange={onChange}
            ></input>
        </div>
    );
}
