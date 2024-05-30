import { useState } from "react";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
