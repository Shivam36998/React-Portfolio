import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Project from './components/Project';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './light.css'
import './responsive.css'
import SingleProject from './parts/SingleProject';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/singleProject" element={<SingleProject />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
