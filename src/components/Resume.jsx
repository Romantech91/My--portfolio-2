import React from 'react';
import resumeFile from '../assets/Victor_Resume.pdf'; 
import './Resume.css'; 


function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
     
      <a href={resumeFile} download className="resume-download">Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>
          <span>JavaScript (ES6+)</span>
        </li>
        <li>
          <span>React.js</span>
        </li>
        <li>
          <span>Node.js & Express</span>
        </li>
        <li>
          <span>HTML & CSS</span>
        </li>
        <li>
          <span>SQL & NoSQL Databases</span>
        </li>
        <li>
          <span>RESTful APIs</span>
        </li>
        <li>
          <span>Git & GitHub</span>
        </li>
        <li>
          <span>TypeScript</span>
        </li>
        <li>
          <span>OOP</span>
        </li>
        <li>
          <span>JSON</span>
        </li>
        <li>
          <span>Fetch</span>
        </li>
        <li>
          <span>Bootstrap</span>
        </li>
        <li>
          <span>Developer Tools</span>
        </li>
        <li>
          <span>Responsive Design</span>
        </li>
        <li>
          <span>Command Line</span>
        </li>
        <li>
          <span>Agile Methodologies</span>
        </li>
        <li>
          <span>Debugging</span>
        </li>
        <li>
          <span>MongoDB</span>
        </li>
        <li>
          <span>GraphQL</span>
        </li>
        <li>
          <span>Cypress</span>
        </li>
        <li>
          <span>React Router</span>
        </li>
        <li>
          <span>PostgresSQL</span>
        </li>
        <li>
          <span>Sequelize</span>
        </li>
        <li>
          <span>Mern</span>
        </li>
        <li>
          <span>Authentication and Authorization</span>
        </li>
        <li>
          <span>JWT</span>
        </li>
        <li>
          <span>Testing</span>
        </li>
        <li>
          <span>CI/CD pipelines</span>
        </li>
        <li>
          <span>Python</span>
        </li>

      </ul>
   </section>
  );
}

export default Resume;
