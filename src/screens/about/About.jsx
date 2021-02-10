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
            concept in a every changing tech field. I've worked with teams of
            cooks to perfect a craft through repetition and to create a
            beautiful product. This has carried over to full stack teams to
            produce a working polished product with the client in mind .I am
            looking to join a company/team to grow with and help grow as a
            Software Engineer.
          </p>
        </div>
      </div>
      <div className="resume-div">
        <span>Resume</span>
        <a href="https://drive.google.com/file/d/1QGr_m13pSwrrwcrrzT9M8gQSbGt3htv2/view">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-journal-plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
            />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
        </a>
      </div>
      <div className="soft-skills-container">
        <div className="soft-skills-div">
          <h1>Learner</h1>
          <p>I've always had the curiosity and joy for learning new things.</p>
        </div>
        <div className="soft-skills-div">
          <h1>Team Player</h1>
          <p>
            Worked as a team with people to deliver a beautiful satisfying
            product.
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
