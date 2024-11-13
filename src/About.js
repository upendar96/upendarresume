//About.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faBookAtlas, faUser } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const About = () => { 
    return ( 
        <section id="about"
            className="container text-center"> 
            <div className="row"> 
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faUser} 
                            className="mr-2" /> 
                        About Me 
                    </h2> 
                    <div className="profile-image-container"> 

                        <img src="/assets/pic.jpeg"
                            alt="geek pic"
                            className="img-fluid rounded-circle profile-image" /> 
                    </div> 
                    <p className="section-description mt-4"> 
                        I am a skilled  Trainee with over 6 months of 
                        hands-on experience in full-stack web development. My 
                        expertise includes using technologies such as MERN stack , 
                        Java, JS, HTML, CSS, and Bootstrap. As a problem solver, 
                        I have successfully designed and developed user-friendly, 
                        responsive web applications. 
                    </p> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faBookAtlas} 
                            className="mr-2" /> 
                        Education:---Graduation
                    </h2> 
                    <div className="profile-image-container"> 

                        <img src="/assets/tkr.jpg"
                            alt="geek pic"
                            className="img-fluid  profile-image" /> 
                    </div> 
                    <p className="section-description mt-4"> 
                        I am recently graduated from tkr collage of engineering and technology 
                        <h2>Branch:-</h2><p>electronics and communication engineering</p>
                        <h2>cgpa</h2><p>7.30</p>
                        <h2>Duration</h2><p>2020-2024</p>
                    </p> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default About;
