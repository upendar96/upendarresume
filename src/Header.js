import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faCode, faFileAlt, faEnvelope, faShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" className="custom-navbar shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-name">
                    <span className="display-4 text-white ho">
                        JAKKALI UPENDAR
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="text-white">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">
                            <span>About</span>
                            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-light ho" />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects">
                            <span>Projects</span>
                            <FontAwesomeIcon icon={faCode} className="ml-2 text-light ho" />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume">
                            <span>Resume & Skills</span>
                            <FontAwesomeIcon icon={faFileAlt} className="ml-2 text-light ho" />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            <span>Contact</span>
                            <FontAwesomeIcon icon={faEnvelope} className="ml-2 text-light ho" />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/certify">
                            <span>Certificates</span>
                            <FontAwesomeIcon icon={faShield} className="ml-2 text-light ho" />
                        </Nav.Link>
                    </Nav>
                        <Nav.Link href="https://github.com/upendar96">
                            <span className="sr-only">Github</span>
                            <FontAwesomeIcon icon={faGithub} size="lg" className="text-light ho" />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/upendar-jakkali-14588927b">
                            <span className="sr-only">Linkedin</span>
                            <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-light ho" />
                        </Nav.Link>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
