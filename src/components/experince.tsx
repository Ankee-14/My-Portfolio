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
    icon: '🌐',
    title: 'Junior Frontend Developer',
    company: 'Samuel Gnanam IT Centre.',
    duration: '2025 - Present',
    description: 'Developed responsive web applications using React and TypeScript, improving performance and implementing interactive UI components.'
  },
  {
    icon: '🖥️',
    title: 'Junior Application support Engineer',
    company: 'IPOSG.',
    duration: '2023 - 2024',
    description: 'Provided application support and troubleshooting for web applications, ensuring smooth performance and assisting users with technical issues.'
  },
  {
    icon: '📸',
    title: 'Founder & CEO',
    company: 'Ankavan Studio',
    duration: '2020 - Present',
    description: 'Founded and led Ankavan Studio, overseeing creative projects, managing client relationships, and driving business growth in photography and graphic design services.'
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
