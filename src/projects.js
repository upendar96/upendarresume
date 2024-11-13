// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 

import './style.css'; 
import { Button } from 'react-bootstrap';

const Projects = () => { 
    

    return ( 
        <section id="projects"
            className="container text-center"> 
            
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCode} 
                    className="mr-2" /> 
                Projects 
            </h2> 
            <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                               Onlne Food Ordering Website
                            </h5> 
                            <p className="card-text"> 
                                Designed the UI and implemented 
                                CSS styling for the website, 
                                optimizing performance and design across 
                                all pages. 
                                Built a fully functional e-commerce 
                                platform with features like product listing, 
                                cart management, and user authentication using 
                                React, Node.js, and MongoDB. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                    <video className='vedio' src='/assets/demo.mp4' autoPlay="true"></video>
                </div> 
                
                <div className='buttonsp'>
                    <button className='liveLink'>
                        <a href='https://roaring-kataifi-4eb213.netlify.app/' >
                           LiveDeployedLink
                           </a>
                    </button>
                
                </div>
                <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                               Personal Portfolio Website
                            </h5> 
                            <p className="card-text"> 
                                Designed the UI and implemented 
                                CSS styling for the website, 
                                optimizing performance and design across 
                                all pages. 
                                
                            </p> 
                        </div> 
                    </div> 
                </div> 
                    <img className='vedio' src='/assets/project2.png' autoPlay="true"></img>
                </div> 

                <div className='buttonsp'>
                    <button className='liveLink'>
                        <a href='' ></a>
                           LiveDeployedLink
                    </button>
                
                </div>
              
            
        </section> 
    ); 
}; 

export default Projects;
