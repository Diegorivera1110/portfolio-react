// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Footer from './components/Footer';
// import Header from "./components/Header";
import Preloader from "../src/components/Pre";
import Navigation from './components/Navigation';
import Project from './components/Project';
import About from './components/About';
import Footer from "./components/Footer";
import Navigation from './components/Navigation';
import Resume from './components/Resume';

import './App.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    // ORIGINAL ROUTES 
    // <>
    // <Preloader load={load} />
    //   <div id="main">
        
    //     <Header></Header>
    //     <Footer></Footer>
    //   </div>
    // </>

  // END ORIGINAL ROUTES

  <Router>
    {/* <Preloader load={load} /> */}
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navigation />
      <JumpToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  </Router>
  );
}

export default App;
  