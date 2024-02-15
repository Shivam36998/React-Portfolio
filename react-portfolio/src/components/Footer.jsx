/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_row">
        <div className="footer_navigation_links">
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>
            <Link to={"/about"}>About</Link>
          </span>
          <span>
            <Link to={"/edu"}>Education</Link>
          </span>
          <span>
            <Link to={"/skill"}>Skill</Link>
          </span>
          <span>
            <Link to={"/project"}>Project</Link>
          </span>
          <span>
            <Link to={"/project"}>Experience</Link>
          </span>
          <span>
            <Link to={"/contact"}>Contact</Link>
          </span>
        </div>
        <div className="footer_navigation_links">
          <span>
            <a
              href={"https://www.linkedin.com/in/shivam-prajapati-66ba92226/"}
              target="_blank">
              LinkedIn
            </a>
          </span>
          <span>
            <a
              href={"https://github.com/Shivam36998"}
              target="_blank">
              GitHub
            </a>
          </span>
          <span>
            <a
              href={"https://www.instagram.com/shivamprajapati__7/"}
              target="_blank">
              Instagram
            </a>
          </span>
          <span>
            <a
              href={"https://twitter.com/gunehgar__7"}
              target="_blank">
              X
            </a>
          </span>
        </div>
      </div>

      <div className="footerLastLine">
        copyright@gunehgar__7 :: made with ❤️ by Shivam Prajapati
      </div>
    </div>
  );
};

export default Footer;
