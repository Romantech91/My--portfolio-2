


import React from 'react';
import './About.css';
import profilePhoto from '../assets/photo.jpg';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <img 
          src="/path/to/your/photo.jpg" 
          alt="Victor A. Roman" 
          className="about-photo" 
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Victor Roman, a passionate web developer with experience in building dynamic and responsive web applications using modern technologies like React, Node.js, and Express. I love solving complex problems and creating efficient solutions that provide an excellent user experience.
          </p>
          <p>
            My journey into web development has been such an educational pivoting point for me. Before i decided to enter the tech world I was a contractor and truck equipment technician. Since then, I've worked on various projects ranging from simple landing pages to complex, full-stack applications.
          </p>
          <p>
            When I'm not coding, I enjoy welding, kayaking, camping and of course spending time with all my loved ones. I am always eager to learn new skills and take on challenging projects that help me grow as a developer.
          </p>
          <a href="/path/to/resume.pdf" className="resume-link" download>Download My Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;
