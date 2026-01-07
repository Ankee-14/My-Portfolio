// src/components/Projects.tsx
import React from 'react';
import './projects.css';

interface Project {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

const projectsData: Project[] = [
    {
        image: '/assets/project1.jpg',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        image: '/assets/project2.jpg',
        title: 'Portfolio Website',
        description: 'A modern responsive portfolio website built with React and TypeScript. Clean design with smooth animations and optimal performance.',
        tags: ['React', 'TypeScript', 'CSS']
    },
    {
        image: '/assets/project3.jpg',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        tags: ['Vue.js', 'Firebase', 'Tailwind']
    }
];

const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="projects-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="project-tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
