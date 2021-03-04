import React, {useCallback, useEffect, useState} from "../../../web_modules/react.js";
import {useDispatch} from "../../../web_modules/react-redux.js";
import classNames from "../../../web_modules/classnames.js";
import {searchForMovieById, saveMovieToPlaylist} from "../../data/thunks.js";
import {Bookmark, ChevronDown, ChevronUp} from "../icons/icons.js";
import "./splash.css.proxy.js";
export function Splash({movie}) {
  const [viewMoreInfo, setViewMoreInfo] = useState(false);
  const className = classNames("app__splash", {
    app__splash_open: viewMoreInfo
  });
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_img",
    style: {
      backgroundImage: `url("${movie.largePoster}")`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_content"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "app__splash_title"
  }, movie.title), /* @__PURE__ */ React.createElement("span", null, "(", movie.year, ")"), /* @__PURE__ */ React.createElement(SaveButton, {
    movie
  })), /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_info"
  }, /* @__PURE__ */ React.createElement(Rating, {
    movie
  }), /* @__PURE__ */ React.createElement("span", {
    className: "app__splash_genre"
  }, movie.genre)), /* @__PURE__ */ React.createElement(MoreInfo, {
    movie,
    viewMoreInfo
  })), /* @__PURE__ */ React.createElement(MoreInfoBtn, {
    viewMoreInfo,
    onClick: () => setViewMoreInfo(!viewMoreInfo)
  }));
}
function MoreInfo({movie, viewMoreInfo}) {
  const className = classNames("app__splash_more_info", {
    app__splash_more_info_show: viewMoreInfo
  });
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_overview"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_title"
  }, "Overview"), /* @__PURE__ */ React.createElement("div", null, movie.plot)), /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_section"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_title"
  }, "Actors"), /* @__PURE__ */ React.createElement("div", null, movie.actors)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_title"
  }, "Directors"), /* @__PURE__ */ React.createElement("div", null, movie.director)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_title"
  }, "Writers"), /* @__PURE__ */ React.createElement("div", null, movie.writer))));
}
function MoreInfoBtn({viewMoreInfo, onClick}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__splash_more_info_btn_container"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "app__splash_more_btn",
    onClick
  }, viewMoreInfo ? /* @__PURE__ */ React.createElement(ChevronUp, {
    className: "app__splash_more_icon"
  }) : /* @__PURE__ */ React.createElement(ChevronDown, {
    className: "app__splash_more_icon"
  })));
}
function SaveButton({movie}) {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(saveMovieToPlaylist({
      movieId: movie.id,
      save: !movie.saved
    }));
  }, [dispatch, movie.id, movie.saved]);
  return /* @__PURE__ */ React.createElement("button", {
    className: "app__no_style_button app__splash_save_button",
    onClick
  }, /* @__PURE__ */ React.createElement(Bookmark, {
    className: "app__splash_save_icon",
    filled: movie.saved
  }));
}
function Rating({movie}) {
  const dispatch = useDispatch();
  const fetchDetailInfo = useCallback((id) => {
    dispatch(searchForMovieById({id}));
  }, [dispatch]);
  useEffect(() => {
    if (!movie.rating) {
      fetchDetailInfo(movie.id);
    }
  }, [dispatch, fetchDetailInfo, movie]);
  if (!movie.rating)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__rating"
  }, movie.rating);
}
