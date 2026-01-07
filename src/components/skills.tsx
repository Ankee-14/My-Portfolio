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
        description: 'Building responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.'
    },
    {
        icon: '⚙️',
        title: 'Backend Development',
        description: 'Creating robust server-side applications with Node.js, Python, and database management.'
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Designing intuitive user experiences with Figma, Adobe XD, and modern design principles.'
    },
    {
        icon: '🛠️',
        title: 'Tools & Others',
        description: 'Proficient with Git, Docker, CI/CD pipelines, and agile development methodologies.'
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
