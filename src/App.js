import React from 'react';
import Navbar from './component/Navbar.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Projects from './component/Projects.js';
import Skills from './component/Skills.js';


function App() {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
