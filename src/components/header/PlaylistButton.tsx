import React from "react";
import { BookmarkSaved } from "../icons/icons";

export function PlaylistButton() {
    return (
        <button className="app__button app__header_playlist_button">
            <BookmarkSaved className="app__header_playlist_icon" />
            <span className="app__header_playlist_text">Playlist</span>
        </button>
    );
}
