// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import About from './components/About';

function App() {

  const [categories] = useState([
    { name: "About",
      desciption: "Section describing who I am and what my expertise are in software engineering." },
      { name: "Portfolio", desciption: "page showing all my projects I either fully developed or contributed to" },
      { name: "Contact", description: "page displaying an input for name and email to send me a message." },
      { name: "Resume", description: "page displaying my resume and link to my resume site." },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <Header></Header>

    </div>
  );
}

export default App;
