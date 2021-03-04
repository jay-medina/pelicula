import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SearchBar } from "./Search";
import { HeaderButton } from "./HeaderButton";

import "./header.css";

const MIDWAY_POINT = 60;

/**
 * Both headers are present on page but only one is visible and renders
 */
export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onscroll = () => {
            setScrolled(window.pageYOffset > MIDWAY_POINT);
        };

        window.onscroll = onscroll;
        return () => {
            window.removeEventListener("onscroll", onscroll);
        };
    }, []);

    return (
        <>
            <DesktopHeader scrolled={scrolled} />
            <MobileHeader scrolled={scrolled} />
        </>
    );
}

function DesktopHeader({ scrolled }: { scrolled?: boolean }) {
    const className = classNames("app__header app__header_desktop", {
        app__header_scrolled: scrolled,
    });

    return (
        <div className={className}>
            <HeaderTitle />
            <SearchBar />
            <HeaderButton />
        </div>
    );
}

function MobileHeader({ scrolled }: { scrolled?: boolean }) {
    const className = classNames("app__header app__header_mobile", {
        app__header_scrolled: scrolled,
    });

    return (
        <div className={className}>
            <div className="app__header_mobile_title">
                <HeaderTitle />
                <HeaderButton />
            </div>
            <SearchBar className="app__header_mobile_search" />
        </div>
    );
}

function HeaderTitle() {
    return <div className="app__header_title">Pelicula</div>;
}
