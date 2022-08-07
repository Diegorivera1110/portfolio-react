import React, { useState } from "react";
// import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../Navigation";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";
// import { render } from "@testing-library/react";

function Header() {
  const [currentPage, pageHandler] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About></About>;
      case "Project":
        return <Project></Project>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} pageHandler={pageHandler} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default Header;
