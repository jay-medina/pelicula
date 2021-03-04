import React, {useEffect, useState} from "../../../web_modules/react.js";
import classNames from "../../../web_modules/classnames.js";
import {SearchBar} from "./Search.js";
import {HeaderButton} from "./HeaderButton.js";
import "./header.css.proxy.js";
const MIDWAY_POINT = 60;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DesktopHeader, {
    scrolled
  }), /* @__PURE__ */ React.createElement(MobileHeader, {
    scrolled
  }));
}
function DesktopHeader({scrolled}) {
  const className = classNames("app__header app__header_desktop", {
    app__header_scrolled: scrolled
  });
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement(HeaderTitle, null), /* @__PURE__ */ React.createElement(SearchBar, null), /* @__PURE__ */ React.createElement(HeaderButton, null));
}
function MobileHeader({scrolled}) {
  const className = classNames("app__header app__header_mobile", {
    app__header_scrolled: scrolled
  });
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__header_mobile_title"
  }, /* @__PURE__ */ React.createElement(HeaderTitle, null), /* @__PURE__ */ React.createElement(HeaderButton, null)), /* @__PURE__ */ React.createElement(SearchBar, {
    className: "app__header_mobile_search"
  }));
}
function HeaderTitle() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__header_title"
  }, "Pelicula");
}
