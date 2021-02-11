import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-div-container">
      <div className="home-header">
        <h2>
          Hello World, I'm <i>John</i>
        </h2>
        <p>
          I'm a <i>Software Engineer</i>. Crafting ideas to life.
        </p>
      </div>
      <div className="home-info-container">
        <div className="home-divs home-tech-stack">
          <div className="tech-stack-div">
            <h1>Tech Stack</h1>

            <div>
              <ul className="tech-stack-list">
                <li>HTML</li>
                <li>CSS/Sass</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>PostgreSQL + SQL</li>
                <li>Ruby</li>
                <li>Rails</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="apps-title-div">Apps</div>
        <div className="home-divs home-projects">
          <div className="projects-div-links">
            <a href="https://determined-jackson-554ec5.netlify.app/">
              <img
                className="home-project-img"
                src="https://puu.sh/Hezmq/7fb1b2038d.png"
                alt="chippy"
              ></img>
            </a>
          </div>
          <div className="projects-div-links">
            <a href="https://sleepy-lewin-9c4a68.netlify.app/">
              <img
                className="home-project-img"
                src="https://puu.sh/Hez96/816e7ca86d.png"
                alt="cool ridings"
              />
            </a>
          </div>
          <div className="projects-div-links">
            <a href="https://eager-lovelace-87276f.netlify.app/">
              <img
                className="home-project-img"
                src="https://puu.sh/Hez22/3db2649e11.png"
                alt="chippy"
              />
            </a>
          </div>
          <div className="projects-div-links">
            <a href="https://johnhkim124.github.io/Recipe-project-1/">
              <img
                className="home-project-img"
                src="https://puu.sh/Hezqq/8e789d8b7b.jpg"
                alt="recipe report"
              />
            </a>
          </div>
        </div>
        {/* <div className="home-divs redirect">
          <div className="about-home-div">
            <Link>About</Link>
          </div>

          <div className="contact-home-div">
            <Link>Contact</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
