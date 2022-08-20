import React from "react";
// import { capitalizeFirstLetter } from "../../../utils/helpers";
import Button from 'react-bootstrap/Button';

function Navigation(props) {
  const pages = ["About", "Project", "Contact", "Resume"];

  return (
    <ul className="nav">
      {pages.map((page) => (
        <li className="" key={page}>
          <Button className="navButton">
          <a
            href={"#" + page.toLowerCase()}
            onClick={() => props.pageHandler(page)}
          >
            {page}
          </a></Button>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
