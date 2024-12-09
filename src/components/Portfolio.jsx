import React from 'react';
import Project from './Project'; 
import Carousel from './Carousel';
import growZoneTrackerImage from '../assets/grow-zone-tracker.jpg';
import gtzLdCode from '../assets/gtz-l-d-code.jpg';
import gztDark from '../assets/gzt-dark.jpg';
import gztFavoritesCode from '../assets/gzt-favorites-code.jpg';
import gztFavorites from '../assets/gzt-favorites.jpg';
import gztSearch from '../assets/gzt-search.jpg';
import gztHardiness from '../assets/gzt-hardiness.jpg';
import gztMap from '../assets/gzt-map.jpg';
import './Portfolio.css'; 

function Portfolio() {
  const projects = [
    {
      title: 'Grow Zone Tracker',
      images: [
        { src: growZoneTrackerImage, alt: 'Grow Zone Tracker' },
        { src: gtzLdCode, alt: 'Grow Zone Tracker Landing Page Code' },
        { src: gztDark, alt: 'Grow Zone Tracker Dark Mode' },
        { src: gztFavoritesCode, alt: 'Grow Zone Tracker Favorites Code' },
        { src: gztFavorites, alt: 'Grow Zone Tracker Favorites' },
        { src: gztSearch, alt: 'Grow Zone Tracker Search' },
        { src: gztHardiness, alt: 'Grow Zone Tracker Hardiness' },
        { src: gztMap, alt: 'Grow Zone Tracker Map' },
      ],
      deployLink: 'https://bbbjrn.github.io/Group03-Project-GrowZoneTracker/',
      repoLink: 'https://github.com/Bbbjrn/Group03-Project-GrowZoneTracker',
    },
   
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-wrapper">
            <Carousel items={project.images} autoPlay={true} interval={5000} />
            <Project
              title={project.title}
              deployLink={project.deployLink}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
