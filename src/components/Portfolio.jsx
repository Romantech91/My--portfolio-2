import React from 'react';
import Project from './Project'; 
import growZoneTrackerImage from '../assets/grow-zone-tracker.jpg';
import './Portfolio.css'; 

function Portfolio() {
  const projects = [
    {
      title: 'Grow Zone Tracker',
      image: growZoneTrackerImage,
      deployLink: 'https://bbbjrn.github.io/Group03-Project-GrowZoneTracker/',
      repoLink: 'https://github.com/Bbbjrn/Group03-Project-GrowZoneTracker',
    },
   
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
