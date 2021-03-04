import React, {useMemo, useState} from "../../../web_modules/react.js";
import {useDispatch, useSelector} from "../../../web_modules/react-redux.js";
import classNames from "../../../web_modules/classnames.js";
import {Search} from "../icons/icons.js";
import {getSearchQuery, isViewingSaved} from "../../data/selectors.js";
import {updateSearchQuery} from "../../data/actions.js";
import {debounce} from "../../../web_modules/lodash.js";
export function SearchBar(props) {
  const searchQuery = useSelector(getSearchQuery);
  const [searchVal, setSearchVal] = useState(searchQuery);
  const viewSaved = useSelector(isViewingSaved);
  const dispatch = useDispatch();
  const className = classNames("app__header_search", props.className);
  const onSearch = useMemo(() => debounce((query) => {
    dispatch(updateSearchQuery({query}));
  }, 500), [dispatch]);
  const onChange = (e) => {
    const query = e.currentTarget.value || "";
    setSearchVal(query);
    onSearch(query);
  };
  if (viewSaved)
    return null;
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement(Search, {
    className: "app__header_search_bar_icon"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "app__header_search_input",
    placeholder: "Search...",
    value: searchVal,
    onChange
  }));
}
