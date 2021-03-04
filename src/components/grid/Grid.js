import React, {useCallback} from "../../../web_modules/react.js";
import {useDispatch, useSelector} from "../../../web_modules/react-redux.js";
import {setSelectedMovie} from "../../data/actions.js";
import {saveMovieToPlaylist} from "../../data/thunks.js";
import {isViewingSaved} from "../../data/selectors.js";
import {Bookmark} from "../icons/icons.js";
import "./grid.css.proxy.js";
export function Grid({movies, query}) {
  const dispatch = useDispatch();
  const onGridItemClick = useCallback((id) => {
    dispatch(setSelectedMovie({movieId: id}));
  }, [dispatch]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__grid"
  }, /* @__PURE__ */ React.createElement(GridTitle, {
    movies,
    query
  }), /* @__PURE__ */ React.createElement("div", {
    className: "app__grid_items"
  }, movies.map((movie) => /* @__PURE__ */ React.createElement(GridItem, {
    key: movie.id,
    movie,
    onClick: () => onGridItemClick(movie.id)
  }))));
}
function GridTitle(props) {
  const viewSaved = useSelector(isViewingSaved);
  if (viewSaved) {
    return /* @__PURE__ */ React.createElement(GridSavedMoviesTitle, {
      ...props
    });
  }
  if (props.query.length === 0) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "app__grid_title"
    }, "All Movies");
  }
  if (props.movies.length === 0) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "app__grid_title app__grid_no_movies"
    }, "No movies match ", props.query);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__grid_title"
  }, props.query, " Movies");
}
function GridSavedMoviesTitle(props) {
  if (props.movies.length === 0) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "app__grid_title app__grid_no_movies"
    }, "No saved movies");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__grid_title"
  }, "Saved Playlist");
}
function GridItem({movie, onClick}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "app__grid_item_container",
    onClick
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__grid_item app__grid_item_background",
    style: {
      backgroundImage: `url("${movie.poster}")`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app__grid_item_fallback_text"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "app__grid_item_title"
  }, movie.title), /* @__PURE__ */ React.createElement("span", null, "(", movie.year, ")")), /* @__PURE__ */ React.createElement(SaveButton, {
    movie
  }))));
}
function SaveButton({movie}) {
  const dispatch = useDispatch();
  const onClick = useCallback((e) => {
    e.stopPropagation();
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
