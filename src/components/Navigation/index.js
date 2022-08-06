import React from "react";
// import { capitalizeFirstLetter } from "../../../utils/helpers";

function Navigation(props) {
  const pages = ["about", "project", "contact", "resume"];

  return (
    <ul className="nav">
      {pages.map((page) => (
        <li className="" key={tab}>
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
