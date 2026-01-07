import React from 'react';
import './experience.css';

interface ExperienceItem {
  icon: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    icon: '💼',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: '2022 - Present',
    description: 'Led development of responsive web applications using React and TypeScript. Improved performance by 40% and mentored junior developers.'
  },
  {
    icon: '💻',
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd.',
    duration: '2020 - 2022',
    description: 'Built end-to-end solutions with React, Node.js, and MongoDB. Collaborated with designers and product teams to deliver high-quality features.'
  },
  {
    icon: '🔧',
    title: 'Junior Web Developer',
    company: 'Web Agency Pro',
    duration: '2019 - 2020',
    description: 'Developed and maintained multiple client websites. Gained expertise in HTML, CSS, JavaScript, and modern web frameworks.'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">My Experience</h2>

        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">{item.icon}</div>
              <div className="experience-content">
                <h3 className="experience-name">{item.title}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-duration">{item.duration}</p>
                <p className="experience-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
