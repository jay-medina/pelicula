import React from "../../../web_modules/react.js";
import classNames from "../../../web_modules/classnames.js";
import {Star} from "../icons/icons.js";
export function LoadingScreen({isLoading}) {
  const className = classNames("app__loading_screen", {
    app__loading_screen_show: isLoading
  });
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__loading_text"
  }, "Searching"), " ", /* @__PURE__ */ React.createElement(Star, {
    className: "app__loading_star"
  }));
}
