


import React from 'react';
import './About.css';
import profilePhoto from '../assets/VictorProfile.jpg';
import resumeFile from '../assets/Victor-A.-Roman-Resume.pdf';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <img 
          src={profilePhoto}
          alt="Victor A. Roman" 
          className="about-photo"

        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
  Hi there! I'm Victor Roman, a passionate web developer who thrives on creating dynamic and responsive web applications using modern technologies like React, Node.js, and Express. I take pride in solving complex problems and building solutions that deliver exceptional user experiences.
</p>
<p>
  My journey into web development has been truly transformative. I come from a diverse background as a general contractor, welder, and truck equipment technician. Despite having no prior experience with computers, I successfully navigated a rigorous coding bootcamp and discovered my passion for tech. 
</p>
<p>
  Outside of coding, you’ll find me kayaking, camping, welding, or spending quality time with my loved ones. I’m always eager to take on new challenges and continue growing as a developer. Feel free to explore my portfolio and see what I’ve been working on!
</p>

          <a href={resumeFile} className="resume-link" download>Download My Resume</a>

        </div>
      </div>
    </section>
  );
}

export default About;
