import React from 'react';
import './Portfolio.css';

function Project({ title, deployLink, repoLink, description, technologies }) {
  return (
    <div className="project">
    <h3>{title}</h3>
    <p className="project-description">{description}</p>
      <div className="project-technologies">
        <strong>Technologies:</strong>
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
    <div className="project-links">
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        Deployed Site
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  </div>
);
}

export default Project;
