/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_navigation_links">
        <span>
          <Link to={"/"}>Home🚀</Link>
        </span>
        <span>
          <Link to={"/about"}>About🚀</Link>
        </span>
        <span>
          <Link to={"/edu"}>Education🚀</Link>
        </span>
        <span>
          <Link to={"/skill"}>Skill🚀</Link>
        </span>
        <span>
          <Link to={"/project"}>Project🚀</Link>
        </span>
        <span>
          <Link to={"/contact"}>Contact🚀</Link>
        </span>
      </div>
      <div className="footerLastLine">
        copyright@gunehgar__7 :: made with ❤️ by Shivam Prajapati
      </div>
    </div>
  );
};

export default Footer;
