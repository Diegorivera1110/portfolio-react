import React, { useState } from "react";
// import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../Navigation";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";
import { render } from "@testing-library/react";

function Header() {
  const [currentPage, pageHandle] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About></About>;
      case "project":
        return <Project></Project>;
      case "contact":
        return <Contact></Contact>;
      case "resume":
        <Resume></Resume>
        default: 
        return <About></About>
    }
  };

  return (
    <div>
        <Navigation currentPage={currentPage} pageHandle={pageHandle} />
        <div>
            {
                renderPage()
            }
        </div>
    </div>
  )
}

export default Header;
