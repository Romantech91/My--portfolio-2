import React from 'react';
import Project from './Project'; 
import Carousel from './Carousel';
import growZoneTrackerImage from '../assets/grow-zone-tracker/grow-zone-tracker.jpg';
import gtzLdCode from '../assets/grow-zone-tracker/gtz-l-d-code.jpg';
import gztDark from '../assets/grow-zone-tracker/gzt-dark.jpg';
import gztFavoritesCode from '../assets/grow-zone-tracker/gzt-favorites-code.jpg';
import gztFavorites from '../assets/grow-zone-tracker/gzt-favorites.jpg';
import gztSearch from '../assets/grow-zone-tracker/gzt-search.jpg';
import gztHardiness from '../assets/grow-zone-tracker/gzt-hardiness.jpg';
import gztMap from '../assets/grow-zone-tracker/gzt-map.jpg';
import kanbanAuthRoutes from '../assets/kanban-board/kanban-auth-routes.jpg';
import kanbanLanding from '../assets/kanban-board/kanban-landing.jpg';
import kanbanLogin from '../assets/kanban-board/kanban-login.jpg';
import kanbanTerminal from '../assets/kanban-board/kanban-terminal.jpg';
import kanbanTicketApiEndpont from '../assets/kanban-board/kanban-ticket-api-endpoint.jpg';
import kanbanTicketSeed from '../assets/kanban-board/kanban-ticket-seed.jpg';
import kanbanUserApiEndpoint from '../assets/kanban-board/kanban-user-api-endpoint.jpg';
import kanbanUserSeed from '../assets/kanban-board/kanban-user-seed.jpg';
import trekMateAuth from '../assets/trek-mate/trek-mate-auth.jpg';
import trekMateLanding from '../assets/trek-mate/trek-mate-landing.jpg';
import trekMateCard from '../assets/trek-mate/trek-mate-card.jpg';
import trekMateInfowindow from '../assets/trek-mate/trek-mate-infowindow.jpg';
import trekMateMaps from '../assets/trek-mate/trek-mate-maps.jpg';
import trekMateMutations from '../assets/trek-mate/trek-mate-mutations.jpg';
import trekMateResults from '../assets/trek-mate/trek-mate-results.jpg';
import trekMateSatellite from '../assets/trek-mate/trek-mate-satellite.jpg';
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
      description: 'A web application to track plant grow zones and find optimal planting conditions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Third-party APIs'],
    },
    {
      title: 'Kanban Board',
      images: [
        { src: kanbanAuthRoutes, alt: 'Kanban Board Authentication Routes' },
        { src: kanbanLanding, alt: 'Kanban Board Landing Page' },
        { src: kanbanLogin, alt: 'Kanban Board Login Page' },
        { src: kanbanTerminal, alt: 'Kanban Board Terminal' },
        { src: kanbanTicketApiEndpont, alt: 'Kanban Board Ticket API Endpoint' },
        { src: kanbanTicketSeed, alt: 'Kanban Board Ticket Seed' },
        { src: kanbanUserApiEndpoint, alt: 'Kanban Board User API Endpoint' },
        { src: kanbanUserSeed, alt: 'Kanban Board User Seed' },
      ],
      //deployLink: 'https://kanban-board-ahvd.onrender.com/',
      repoLink: 'https://github.com/Romantech91/Kanban-Board',
      description: 'A full-stack application that allows users to create, update, and manage tasks',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication', 'CSS', 'TypeScript', 'bcrypt', 'Bootstrap', 'Render'],
    },
    {
      title: 'Trek-Mate',
      images: [
        { src: trekMateAuth, alt: 'trek-mate-authentication' },
        { src: trekMateLanding, alt: 'trek-mate-landing' },
        { src: trekMateCard, alt: 'trek-mate-card' },
        { src: trekMateInfowindow, alt: 'trek-mate-infowindow' },
        { src: trekMateMaps, alt: 'trek-mate-maps' },
        { src: trekMateMutations, alt: 'trek-mate-mutations' },
        { src: trekMateResults, alt: 'trek-mate-results' },
        { src: trekMateSatellite, alt: 'trek-mate-satellite' },
      ],
      deployLink: 'https://trek-mate.onrender.com//',
      repoLink: 'https://github.com/Romantech91/Trek-Mate',
      description: 'A full-stack application that allows users to find hiking trails near them save their favorite trails, and view trail details.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication', 'CSS', 'Third-party APIs', 'GraphQL', 'Apollo Server', 'Apollo Client', 'MongoDB Atlas', 'Mongoose', 'Bootstrap'],
    }

  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-wrapper">
            <Carousel items={project.images} autoPlay={false} interval={5000} />
            <Project
              title={project.title}
              description={project.description}
              technologies={project.technologies}
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
