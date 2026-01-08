// src/components/About.tsx
import React from 'react';
import './about.css';

import profileImg from '../assets/linkedin-profile.jpg';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-image-wrapper">
          <img
            src={profileImg}
            alt="Profile"
            className="about-profile-img"
          />
        </div>

        <div className="about-text">
          <p>
            Hello! I’m a UI/UX-focused Frontend Developer and a passionate learner who enjoys creating clean, modern, and user-friendly web experiences. My interest in technology started with curiosity about how websites work, which gradually grew into a strong focus on frontend development and interface design.
I enjoy turning ideas and designs into responsive, visually appealing interfaces while paying attention to usability and user experience. I’m continuously learning modern frontend technologies and UI/UX best practices to improve my skills and build better digital products.
I love exploring new design trends, improving my coding skills, and taking on challenges that help me grow as a developer. When I’m not coding, I spend time learning, experimenting with designs, and refining my projects to create meaningful user experiences.
          </p>
          <p>
           <br />          Thank you for visiting my portfolio! I’m excited to connect with like-minded professionals and explore opportunities to contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;