import React from 'react';
import './Portfolio.css';

function Project({ title, deployLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
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
