// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bookmark__icon,\n.search__icon,\n.star__icon,\n.collection__icon,\n.chevron__icon {\n    width: 14px;\n    height: 14px;\n}\n\n.chevron__up_icon {\n    transform: rotate(180deg);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}