// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 

import './style.css'; 
import { Button } from 'react-bootstrap';

const Certificates = () => { 
    

    return ( 
        <section id="projects"
            className="container text-center"> 
            
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCode} 
                    className="mr-2" /> 
                Certificates
            </h2> 
                <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                              MERN Stack from PrepInsta
                            </h5> 
                            <p className="card-text"> 


I successfully completed a comprehensive MERN Stack development course from PrepInsta,
 where I mastered MongoDB, Express.js, React, and Node.js.
 This hands-on program equipped me with the skills to develop full-stack web applications, 
 implement RESTful APIs, and manage databases efficiently.
  Through this course, I gained practical experience by building multiple projects, solidifying my understanding of each technology in the stack.
                                
                            </p> 
                        </div> 
                    </div> 
                </div> 
                    <img className='cert1' src='/assets/certify.jpg' autoPlay="true"></img>
                </div> 
              
            
        </section> 
    ); 
}; 

export default Certificates;
