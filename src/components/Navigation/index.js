import React from "react";
// import { capitalizeFirstLetter } from "../../../utils/helpers";

function Navigation(props) {
  const pages = ["About", "Project", "Contact", "Resume"];

  return (
    <ul className="nav">
      {pages.map((page) => (
        <li className="" key={page}>
          <a
            href={"#" + page.toLowerCase()}
            onClick={() => props.pageHandler(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
