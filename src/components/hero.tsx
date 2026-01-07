// src/components/Hero.tsx
import React from 'react';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Satheeskumar Ankavan</span>, UI/UX Focused 
            <br />
            Frontend Developer.
          </h1>
          <p>
           I’m a Frontend Developer with a strong UI/UX mindset, dedicated to building clean, modern, and user-friendly web experiences that feel intuitive and purposeful.
          </p>
          <button className="hero-btn">
            Download Resume
          </button>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src="src/assets/ankee Convo.jpg"
              alt="3D Developer Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;