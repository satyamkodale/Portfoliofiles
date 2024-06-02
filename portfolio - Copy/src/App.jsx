// import { useState } from "react";
// import Hero from "./components/Hero/Hero";
// import "./App.css";
// import Projects from "./components/Projects/Projects";
// import Skills from "./components/Skills/Skills";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Nav from "./components/Nav/Nav";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Skills1 from "./components/Skill/Skills1.jsx";
// import Project2 from "./components/Project/Project2.jsx";
import Contact2 from "./components/Contact2/Contact2.jsx";
import "./App.css";
// ------------------------------------------------------
import Skills from "./components/Skills/Skills.jsx";
import Project from "./components/Project/Project2.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/" element={<Hero />} />
        {/* <Route path="/skills" element={<Skills1 />} /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        {/* <Route path="/contact" element={<Contact2 />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <Nav />
//       <Hero />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
