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
    degree: 'Bachelor\'s degree, Computer software Engineering',
    institution: 'SLIIT City UNI ',
    year: '2024 - 2025',
    description: 'Strong foundation in computer science fundamentals, data structures, algorithms, and software engineering principles.'
  },
  {
    icon: '📜',
    degree: 'Higher National Diploma in Software Engineering',
    institution: 'BCAS Campus Sri Lanka',
    year: '2020 - 2022',
    description: 'Intensive 12-week program focused on modern web development with React, Node.js, and practical project experience.'
  },
  {
    icon: '🏆',
    degree: 'GCE Advanced Level',
    institution: 'Jaffna Hindu College',
    year: '2012 - 2020',
    description: 'Completed GCE Advanced Level (commerce stream) .'
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
