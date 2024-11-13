//App.js 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Header'; 
import About from './About'; 
import Projects from './projects'; 
import Resume from './Resume'; 
import Contact from './Contact'; 
import Footer from './Footer'; 
import Skills from './Skills'; 

function App() { 
return ( 
    <Router> 
    <div> 
        <Header /> 
        <Routes> 
        <Route path="/" element={<About />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/contact" element={<Contact />} /> 
        </Routes> 
        <Footer /> 
    </div> 
    </Router> 
); 
} 

export default App; 
