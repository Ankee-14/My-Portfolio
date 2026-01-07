import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Me</h3>
            <p className="footer-text">
              I'm a passionate full-stack developer dedicated to creating beautiful and functional web experiences.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-socials">
              <a href="https://linkedin.com" className="social-icon" title="LinkedIn">
                LinkedIn
              </a>
              <a href="https://github.com" className="social-icon" title="GitHub">
                GitHub
              </a>
              <a href="https://twitter.com" className="social-icon" title="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with <span className="heart">♥</span> by Me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
