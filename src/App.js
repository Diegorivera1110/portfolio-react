// import logo from './logo.svg';
import './App.css';
// import "./index.css";
import React, { useState, useEffect } from "react";
// import Footer from './components/Footer';
import Header from "./components/Header";
import Preloader from "../src/components/Pre";
// import Navigation from './components/Navigation';
// import Project from './components/Project';
// import About from './components/About';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// import Particle from './components/Particle';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <>
    {/* <Particle /> */}
    <Preloader load={load} />
      <div id="main">
        
        <Header></Header>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
  