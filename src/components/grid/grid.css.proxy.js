// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app__grid {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n}\n\n.app__grid_items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.app__grid_title {\n    font-size: 1.25rem;\n    margin-bottom: 1rem;\n    text-transform: capitalize;\n}\n\n.app__grid_no_movies {\n    margin-top: 4rem;\n}\n\n.app__grid_item_container {\n    position: relative;\n}\n\n.app__grid_item {\n    background-position: center 10%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 200px;\n    height: 112.5px;\n    margin: 0.15rem;\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n    padding: 0.25rem;\n    border: 1px solid var(--grey);\n    cursor: pointer;\n    transition-delay: 1s;\n    transition: transform 0.25s;\n}\n\n.app__grid_item_container:hover .app__grid_item {\n    position: relative;\n    transform: scale(1.25);\n    z-index: 1;\n}\n\n.app__grid_item_fallback_text {\n    font-size: 0.5rem;\n    z-index: -1;\n    display: flex;\n    justify-content: space-between;\n}\n\n.app__grid_item_title {\n    font-size: 0.65rem;\n    font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n    .app__grid_no_movies {\n        margin-top: 6rem;\n    }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}