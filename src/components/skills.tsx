// src/components/Skills.tsx
import React from 'react';
import './skills.css';

interface Skill {
    icon: string;
    title: string;
    description: string;
}

const skillsData: Skill[] = [
    {
        icon: '💻',
        title: 'Frontend Development',
        description: 'Building responsive, accessible, and interactive user interfaces using React and modern frontend technologies with CSS frameworks.'
    },
    {
        icon: '⚙️',
        title: 'Backend Development',
        description: 'Hands-on knowledge of Spring Boot fundamentals with API testing and validation using Postman.'
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Designing intuitive user experiences with Figma, Adobe XD, and modern design principles (Basic).'
    },
    {
        icon: '🛠️',
        title: 'Tools & Others',
        description: 'Proficient with Git and MySQL, with a good understanding of version control and database management.'
    }
    ,{
        icon: '📷',
        title: 'Photography',
        description: 'Capturing moments and landscapes with a keen eye for composition and lighting, with editing expertise in Photoshop and Lightroom.'
    }
];

const Skills: React.FC = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.title}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
