import React from 'react';
import './ProjectBox.css'; // Import your CSS file

const ProjectBox = ({ title, description, link }) => {
    return (
        <div className="project-box">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                Project Code 
            </a>
        </div>
    );
};

export default ProjectBox;