import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

console.log(reactRoot);

const DATA = [1, 2, 3, 4, 5];

// reactRoot.render(
//   createElement(
//     "ul",
//     { className: "someClass", style: { color: "red" } },
//     createElement("li", {}, "1"),
//     createElement("li", {}, "2"),
//     createElement("li", {}, "3"),
//     createElement("li", {}, "4"),
//     createElement("li", {}, "5"),
//     createElement("li", {}, "6"),
//     createElement("li", {}, "7")
//   )
// );

reactRoot.render(
  <ul className='someClass' style={{ color: "red" }}>
    {DATA.map((data) => (
      <li>
        <span>{data}</span>
      </li>
    ))}
  </ul>
);
