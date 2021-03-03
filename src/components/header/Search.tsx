import React, { ChangeEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Search } from "../icons/icons";
import { getSearchQuery, isViewingSaved } from "../../data/selectors";
import { updateSearchQuery } from "../../data/actions";
import { debounce } from "lodash";

type SearchBarProps = {
    className?: string;
    fullScreen?: boolean;
};

export function SearchBar(props: SearchBarProps) {
    const searchQuery = useSelector(getSearchQuery);
    const [searchVal, setSearchVal] = useState(searchQuery);
    const viewSaved = useSelector(isViewingSaved);
    const dispatch = useDispatch();
    const className = classNames("app__header_search", props.className);

    const onSearch = useMemo(
        () =>
            debounce((query: string) => {
                dispatch(updateSearchQuery({ query }));
            }, 500),
        [dispatch]
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.currentTarget.value || "";
        setSearchVal(query);
        onSearch(query);
    };

    if (viewSaved) return null;

    return (
        <div className={className}>
            <Search className="app__header_search_bar_icon" />
            <input
                className="app__header_search_input"
                placeholder="Search..."
                value={searchVal}
                onChange={onChange}
            ></input>
        </div>
    );
}
