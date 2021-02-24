import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main-container">
      
      <a className="project-link-divs" href="https://sleepy-lewin-9c4a68.netlify.app/">
        <img
          className="projects-img project-child cool-ridings-img "
          src="https://puu.sh/Hez96/816e7ca86d.png"
          alt="cool ridings"
        />
        <div className="description-div">
          <h3 className="project-child">Cool Ridings</h3>
          <p className="project-child">
            A e-commerce bike shop working on a team of three. Utilizing
            React/front-end and Express/backend. Full-stack with authentication.
            Main feature I worked on was the bike list screen.
          </p>
          <a  href="https://github.com/jpacheco008/Cool-Ridings"><button className="redirect-buttons">GitHub</button></a>
          <a  href="https://sleepy-lewin-9c4a68.netlify.app"><button className="redirect-buttons">Live Link</button></a>
        </div>
      </a>
      

      <a className="project-link-divs" href="https://determined-jackson-554ec5.netlify.app/">
        <img
          className="projects-img project-child chippy-img"
          src="https://puu.sh/Hezmq/7fb1b2038d.png"
          alt="chippy"
        />
        <div className="description-div">
          <h3 className="project-child">Chippy</h3>
          <p className="project-child">
            One stop app for all your snacky needs. Full-stack app front-end and
            back-end. Utilizing Ruby on Rails, React, and a Restful API.
          </p>
          <a  href="https://github.com/johnhkim124/Chippy"><button className="redirect-buttons">GitHub</button></a>
          <a  href="https://determined-jackson-554ec5.netlify.app/"><button className="redirect-buttons">Live Link</button></a>
        </div>
      </a>
      <a className="project-link-divs" href="https://eager-lovelace-87276f.netlify.app/">
        <img
          className="projects-img project-child fetched-img"
          src="https://puu.sh/Hez22/3db2649e11.png"
          alt="fetched"
        ></img>
        <div className="description-div">
          <h3 className="project-child">Fetched!</h3>
          <p className="project-child">
            A React and Airtable app that allows users to browse dogs up for
            adoption as well as put up dogs for adoption. At the home page you
            can navigate to browse dogs to see a listing of dogs for adoption.
            Also list any dogs in need of a loving home.
          </p>
          <a  href="https://github.com/johnhkim124/fetched"><button className="redirect-buttons">GitHub</button></a>
          <a  href="https://eager-lovelace-87276f.netlify.app"><button className="redirect-buttons">Live Link</button></a>
        </div>
      </a>
      <a className="project-link-divs" href="https://johnhkim124.github.io/Recipe-project-1/">
        <img
          className="projects-img project-child recipe-report-img"
          src="https://puu.sh/Hezqq/8e789d8b7b.jpg"
          alt="recipe report"
        ></img>
        <div className="description-div">
          <h3 className="project-child">Recipe Report</h3>
          <p className="project-child">
            A searching app where you can search foods or categories of foods
            you'd like to cook. Simply type in the food recipe or food category
            your looking for and the recipe will show up as well as other
            information such as nutrional facts.
          </p>
          <a  href="https://github.com/johnhkim124/Recipe-project-1"><button className="redirect-buttons">GitHub</button></a>
          <a  href="https://johnhkim124.github.io/Recipe-project-1/"><button className="redirect-buttons">Live Link</button></a>
        </div>
      </a>
    </div>
  );
};

export default Projects;
