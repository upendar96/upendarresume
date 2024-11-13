//Header.js 
import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import { FontAwesomeIcon } 
from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } 
from '@fortawesome/free-brands-svg-icons'; 
import { 
faInfoCircle, faCode, 
faFileAlt, faEnvelope 
} 
from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

import './Header.css'; 


const Header = () => { 
return ( 
    <div className='nav'>
    <Navbar bg="dark" expand="lg"
    className="custom-navbar shadow-sm"> 
    <Navbar.Brand as={Link} to="/"
        className="brand-name"> 
        <span className="display-4 text-white ho"> 
        JAKKALI UPENDAR
        </span> 
    </Navbar.Brand> 
    
    <div className="collapse navbar-collapse text-white"
        id="navbarNav"> 
        <Nav className="details ml-auto "> 
        <Nav.Link as={Link} to="/"> 
            <span>About</span> 
            <FontAwesomeIcon icon={faInfoCircle} 
            className="ml-2 text-light ho ho" /> 
        </Nav.Link> 
        <Nav.Link as={Link} to="/projects"> 
            <span>Projects</span> 
            <FontAwesomeIcon icon={faCode} 
            className="ml-2 text-light ho" /> 
        </Nav.Link> 
        <Nav.Link as={Link} to="/resume"> 
            <span>Resume&Skills</span> 
            <FontAwesomeIcon icon={faFileAlt} 
            className="ml-2 text-light ho" /> 
        </Nav.Link> 
        <Nav.Link as={Link} to="/contact"> 
            <span>Contact</span> 
            <FontAwesomeIcon icon={faEnvelope} 
            className="ml-2 text-light ho" /> 
        </Nav.Link> 
        </Nav> 
        <Nav className="social ml-auto"> 
        <Nav.Link href="https://github.com/upendar96"> 
            <span className="sr-only">Github</span> 
            <FontAwesomeIcon icon={faGithub} size="lg"
            className='text-light ho' /> 
        </Nav.Link> 
        <Nav.Link href="https://www.linkedin.com/in/upendar-jakkali-14588927b"> 
            <span className="sr-only">Linkedin</span> 
            <FontAwesomeIcon icon={faLinkedin} size="lg"
            className='text-light ho' /> 
        </Nav.Link> 
        </Nav> 
    </div> 
    </Navbar> 
    </div>
); 
}; 

export default Header;
