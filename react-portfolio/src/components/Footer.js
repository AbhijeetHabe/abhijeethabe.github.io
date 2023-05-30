import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/AbhijeetHabe/" target="_blank"><GithubIcon /></a>
        <a href="https://www.linkedin.com/in/abhijeet-habe/" target="_blank"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Abhijeet Habe</p>
    </div>
  );
}

export default Footer;
