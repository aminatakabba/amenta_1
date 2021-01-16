import React from 'react';
import './Projects.css';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png'

function Projects() {
    return (
        <div className="projects">
            <div className="project__title">
                <h1>our work</h1>
            </div>
            <div className="project__work">
                <div className="project__div">
                    <img 
                        src={project1} 
                        alt="wise advise project" 
                        className="project__img"/> 
                </div>

                <div className="project__div">
                    <img 
                        src={project2} 
                        alt="amazon project" 
                        className="project__img"/>
                </div>
                
                <div className="project__div">
                    <img 
                        src={project3} 
                        alt="recipe generator project" 
                        className="project__img"/>
                </div>
                </div>
        </div>
    )
}

export default Projects
