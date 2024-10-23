import React from 'react';
import ProjectBox from './ProjectBox';

const ProjectList = () => {
    const projects = [
        {
            title: 'Responsive Portfolio',
            description: 'Its is a Portfolio Web page.',
            link: 'https://github.com/josaphkishore9182',
        },
        {
            title: 'Mid Marks In Online',
            description: 'Mid marks in online is a Project that helps students for know there Mid marks ',
            link: 'https://github.com/josaphkishore9182',
        },
        {
            title: 'Medicine In  Online',
            description: 'This is tha Project That Helps to know whare tha Medicine is Available.',
            link: 'https://github.com/josaphkishore9182',
        },
    ];

    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <ProjectBox 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                />
            ))}
        </div>
    );
};

export default ProjectList;