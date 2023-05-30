import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Abhijeet</h2>
        <div className="prompt">
          <div>
            <p>A Software Developer with a passion for learning and creating.</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/abhijeet-habe/" target="_blank"><LinkedInIcon /></a>
            <a href="https://abhijeethabe23@gmail.com" target="_blank"><EmailIcon /></a>
            <a href="https://github.com/AbhijeetHabe/" target="_blank"><GithubIcon /></a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java, Python, JavaScript,C#, .Net, ExpressJS, MySQL, MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
