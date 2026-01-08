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
              " I'm a junior frontend developer passionate about creating clean, responsive, and interactive web interfaces using React and modern CSS. With 5 years of photography experience and expertise in Photoshop and Lightroom, I bring a keen eye for visual design. Additionally, I create engaging graphic designs, including flyers and social media thumbnails. "
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-socials">
              <a href="mailto:ankavan2001714@gmail.com" className="social-icon" title="Email">
                Email
              </a>
              <a href="https://www.linkedin.com/in/satheeskumar-ankavan/" className="social-icon" title="LinkedIn">
                LinkedIn
              </a>
              <a href="https://github.com/Ankee-14" className="social-icon" title="GitHub">
                GitHub
              </a>
              <a href="https://www.youtube.com/@Ankee-sathees" className="social-icon" title="YouTube">
                YouTube
              </a>
              <a href="https://www.facebook.com/share/1R4TDPLFZa/" className="social-icon" title="Facebook">
                Facebook
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
