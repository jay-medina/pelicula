import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isViewingSaved } from "../../data/selectors";
import { resetSelectedMovie, setViewSaved } from "../../data/actions";
import { BookmarkSaved, Collection } from "../icons/icons";

interface ButtonProps {
    onClick: () => void;
}

export function HeaderButton() {
    const dispatch = useDispatch();
    const viewSaved = useSelector(isViewingSaved);

    const onClick = useCallback(() => {
        dispatch(resetSelectedMovie());
        dispatch(setViewSaved({ view: !viewSaved }));
    }, [dispatch, viewSaved]);

    if (viewSaved) {
        return <CollectionButton onClick={onClick} />;
    }

    return <PlaylistButton onClick={onClick} />;
}

function PlaylistButton({ onClick }: ButtonProps) {
    return (
        <button className="app__button app__header_button" onClick={onClick}>
            <BookmarkSaved className="app__header_icon" />
            <span className="app__header_text">Playlist</span>
        </button>
    );
}

function CollectionButton({ onClick }: ButtonProps) {
    return (
        <button className="app__button app__header_button app__header_collection_button" onClick={onClick}>
            <Collection className="app__header_icon" />
            <span className="app__header_text"> Results</span>
        </button>
    );
}
