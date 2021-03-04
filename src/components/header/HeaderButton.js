import React, {useCallback} from "../../../web_modules/react.js";
import {useDispatch, useSelector} from "../../../web_modules/react-redux.js";
import {isViewingSaved} from "../../data/selectors.js";
import {resetSelectedMovie, setViewSaved} from "../../data/actions.js";
import {BookmarkSaved, Collection} from "../icons/icons.js";
export function HeaderButton() {
  const dispatch = useDispatch();
  const viewSaved = useSelector(isViewingSaved);
  const onClick = useCallback(() => {
    dispatch(resetSelectedMovie());
    dispatch(setViewSaved({view: !viewSaved}));
  }, [dispatch, viewSaved]);
  if (viewSaved) {
    return /* @__PURE__ */ React.createElement(CollectionButton, {
      onClick
    });
  }
  return /* @__PURE__ */ React.createElement(PlaylistButton, {
    onClick
  });
}
function PlaylistButton({onClick}) {
  return /* @__PURE__ */ React.createElement("button", {
    className: "app__button app__header_button",
    onClick
  }, /* @__PURE__ */ React.createElement(BookmarkSaved, {
    className: "app__header_icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "app__header_text"
  }, "Playlist"));
}
function CollectionButton({onClick}) {
  return /* @__PURE__ */ React.createElement("button", {
    className: "app__button app__header_button app__header_collection_button",
    onClick
  }, /* @__PURE__ */ React.createElement(Collection, {
    className: "app__header_icon"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "app__header_text"
  }, " Results"));
}
