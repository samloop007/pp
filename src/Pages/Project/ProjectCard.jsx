import React from 'react';
import './ProjectCard.css';

const projects = [
  {
    title: "GoSawari App",
    description: "A carpooling platform that connects drivers and passengers.",
    image: "https://www.upwork.com/att/download/portfolio/persons/uid/1673681340072300544/profile/projects/files/e06ae698-ecfa-4e73-86e1-c78ffd268a11",
    link: "https://gosawari.com"
  },
  {
    title: "VISION TECH COUNSEL",
    description: "A Career Counseling web site",
    image: "https://cdn.truelancer.com/upload-full/1746485158-Screenshot-from-2025-05-06-03-25-08.png",
    link: "https://www.visiontechcounsel.com/"
  },
  {
    title: "Forscratch",
    description: "Forscratch is cat product website on wix ",
    image: "https://www.upwork.com/att/download/portfolio/persons/uid/1673681340072300544/profile/projects/files/7c70cb45-65cd-44e1-b03f-c1cf3c22b810",
    link: "https://www.forscratch.com/"
  },
  {
    title: "GBCYWO Charity website",
    description: "This is charity website made with wordpress.",
    image: "https://cdn.truelancer.com/upload-full/1746485771-Screenshot-from-2025-05-06-03-52-44.png",
    link: "https://gbcywo.netlify.app/"
  },
  {
    title: "Herbarium site",
    description: "This is garden web site that i made.",
    image: "https://www.upwork.com/att/download/portfolio/persons/uid/1673681340072300544/profile/projects/files/c3349f50-0195-48c6-9f7c-e031220bfcf4",
    link: "https://www.upwork.com/freelancers/~01104ef89b0c3b3cba?p=1804873400368758784"
  },
  {
    title: "Info Finder",
    description: "info finder is toiurist web site on wordpress",
    image: "https://cdn.truelancer.com/upload-full/1746540753-Screenshot-from-2025-05-06-19-09-49.png",
    link: "https://infofinder.pk/"
  },
  {
    title: "Vulnerability Assessment Report",
    description: "Security flaws identified and analyzed in a test web app.",
    image: "https://cdn.truelancer.com/upload-full/1746823743-ChatGPT-Image-May-10--2025--01_35_45-AM.png",
    link: "https://yourportfolio.com"
  },
  {
    title: "lOCAL MAP",
    description: "A to-do list and productivity tracking app.",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQE4_o23D4fjtA/feedshare-shrink_800/B4DZa71h7GGYAg-/0/1746908095185?e=1749686400&v=beta&t=ZN0WEN1JksK9nzfvjo2T3CJb-sAUZ5FxCjjoSSGhmLU",
    link: "https://infofinder.netlify.app/"
  }
];
const ProjectCard = () => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
