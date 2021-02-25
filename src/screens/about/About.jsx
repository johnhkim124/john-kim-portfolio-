import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-me-container">
      <div className="profile-container">
        <div className="profile profile-pic-div">
          <img
            className="profile-pic"
            src="https://i.ibb.co/pKpPYQk/onaboat.jpg"
            alt="john kim"
          ></img>
        </div>
        <div className="profile profile-description-div">
          <h1>John Kim</h1>
          <p>
            I am a determined Chef and Software Engineer. Open-minded,
            growth-focused, and adaptable, is what made me a chef. It pushed me
            to wanting to learn something new everyday. Just like learning a new
            recipe. I apply those same tools to learning a new language or
            concept in an ever changing tech field. I've worked with teams of
            cooks to perfect a craft through repetition and to create a
            beautiful product. This has carried over to full stack teams to
            produce a working polished product with the client in mind .I am
            looking to join a company/team to grow with as a
            Software Engineer.
          </p>
        </div>
      </div>
      <div className="resume-div">
        <span>
          <a href="https://docdro.id/m9WhMT4">Resume</a>
        </span>
        <a href="https://docdro.id/m9WhMT4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            class="bi bi-folder-symlink"
            viewBox="0 0 16 16"
          >
            <path d="M11.798 8.271l-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z" />
            <path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91l-.637-7zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
          </svg>
        </a>
      </div>
      <div className="soft-skills-container">
        <div className="soft-skills-div">
          <h1>Learner</h1>
          <p>I've always had the curiosity and joy for learning new things. Always learning one step at a time.</p>
        </div>
        <div className="soft-skills-div">
          <h1>Team Player</h1>
          <p>
            Always striving to help as a team. 
          </p>
        </div>
        <div className="soft-skills-div">
          <h1>Designer</h1>
          <p>
            Designer at heart. More than just function I'm always thinking for
            the client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
