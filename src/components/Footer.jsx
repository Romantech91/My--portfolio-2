import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Romantech91" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/victor-roman-9a5a84255/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
      <p className="footer-text">
  © 2024 Victor A. Roman. Designed and built by Victor A. Roman.
  Contact me at:{" "}
  <a href="mailto:victor_roman1198@yahoo.com" className='email-link'>
    victor_roman1198@yahoo.com
  </a>
</p>

<p className="footer-quote">"Learn everything you can, as fast as you can." -Dad</p>
    </footer>
  );
}

export default Footer;

