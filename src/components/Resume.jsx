import React from 'react';
import resumeFile from '../assets/Victor-A.-Roman-Resume.pdf'; 
import './Resume.css'; 

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
     
      <a href={resumeFile} download className="resume-download">Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js & Express</li>
        <li>HTML & CSS</li>
        <li>SQL & NoSQL Databases</li>
        <li>RESTful APIs</li>
        <li>Git & GitHub</li>
        <li>Node</li>
        <li>Typescript</li>
        <li>OOP</li>
        <li>JSON</li>
        <li>Fetch</li>
        <li>Bootstrap</li>
        <li>Developer Tools</li>
        <li>Responsive Design</li>
        <li>Command Line</li>
        
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;
