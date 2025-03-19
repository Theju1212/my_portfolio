import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        
       
        <header className="main-header">
          <h1>Hi, I'm Thejaswini</h1>
          <p>A Passionate Web Developer & Programmer</p>
        </header>

        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Education</Link>  
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
