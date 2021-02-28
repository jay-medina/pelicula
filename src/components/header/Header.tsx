import React from "react";
import { SearchBar } from "./Search";
import { PlaylistButton } from "./PlaylistButton";

import './header.css';

/**
 * Both headers are present on page but only one is visible and renders
 */
export function Header() {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    );
}

function DesktopHeader() {
    return (
        <div className="app__header app__header_desktop">
            <HeaderTitle />
            <SearchBar />
            <PlaylistButton />
        </div>
    );
}

function MobileHeader() {
    return (
        <div className="app__header app__header_mobile">
            <div className="app__header_mobile_title">
                <HeaderTitle />
                <PlaylistButton />
            </div>
            <SearchBar className="app__header_mobile_search" />
        </div>
    );
}

function HeaderTitle() {
    return <div className="app__header_title">Pelicula</div>;
}
