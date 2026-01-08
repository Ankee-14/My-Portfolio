// src/components/Projects.tsx
import React from 'react';
import './projects.css';
import projectImg1 from '../assets/Grow Your RESTAURANT Business Smartly_.jpg';
import projectImg2 from '../assets/ui ux.jpg';
import projectImg3 from '../assets/Travel.jpg';
import projectImg4 from '../assets/Cake Flyer Designs.jpg';

interface Project {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

const projectsData: Project[] = [
    {
        image: projectImg1,
        title: 'Restaurant Management System',
        description: 'A restaurant management system UI designed in Figma and implemented using React and CSS, featuring responsive layouts, interactive components, and a clean dashboard experience.',
        tags: ['React', 'Spring Boot', 'MySQL']
    },
    {
        image: projectImg2,
        title: 'Portfolio Website',
        description: 'A modern responsive portfolio website built with React and TypeScript. Clean design with smooth animations and optimal performance.',
        tags: ['React', 'TypeScript', 'CSS']
    },
    {
        image: projectImg3,
        title: 'Photography',
        description: 'Photography with 5 years of experience, specializing in composition, lighting, and post-processing.',
        tags: ['Photoshop', 'Lightroom', 'Photography']
    },
    {
        image: projectImg4,
        title: 'Graphics Design',
        description: 'Graphic design experience creating flyers, posters, and social media thumbnails with a focus on visual clarity and engagement.',
        tags: ['Photoshop', 'Illustrator', 'Canva', 'Figma']
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
