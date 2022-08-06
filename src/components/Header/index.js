import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../Navigation";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";



class Header extends Component {
    Header() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <div className="page">
                    <Route exact path="/" render={() => <Redirect to="/about" />} />
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/project" component={Project}></Route>
                </div>
            </HashRouter>
        )
    }
}

export default Header;