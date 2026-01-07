import React from 'react';
import './education.css';

interface EducationItem {
  icon: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    icon: '🎓',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Tech University',
    year: '2015 - 2019',
    description: 'Strong foundation in computer science fundamentals, data structures, algorithms, and software engineering principles.'
  },
  {
    icon: '📚',
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Code Academy',
    year: '2019',
    description: 'Intensive 12-week program focused on modern web development with React, Node.js, and practical project experience.'
  },
  {
    icon: '🏆',
    degree: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    year: '2021',
    description: 'Professional certification demonstrating expertise in designing and deploying scalable, reliable, and secure infrastructure on AWS.'
  }
];

const Education: React.FC = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">{item.icon}</div>
              <div className="education-content">
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-year">{item.year}</p>
                <p className="education-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
