import React from 'react';
import './Portfolio.css'; 

function Project({ title, image, deployLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployLink} target="_blank" rel="noopener noreferrer">Deployed Site</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
