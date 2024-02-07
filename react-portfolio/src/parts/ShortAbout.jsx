/** @format */

import React from "react";
import styles from "./ShortAbout.module.css";
import { Link } from "react-router-dom";

const ShortAbout = () => {
  return (
    <div className={styles.page}>
      <div>
        <ul>
          <li>
            <strong>Education:</strong> B.Tech, IIT (BHU), graduating in 2025,
            CGPA-8.33.
          </li>
          <li>
            <strong>Skills:</strong> C, C++, JavaScript, HTML, CSS, NodeJS,
            Express.JS, MongoDB, ReactJS, Git, <Link to={"/skill"}>more</Link>
          </li>
          <li>
            <strong>Projects:</strong> <Link to={"/project"}>See here</Link>
          </li>
          <li>
            <strong>Interests:</strong> Full Stack Development, Data Analysis.
          </li>
          <li>
            <strong>Readiness:</strong> Eager to apply skills and open to
            collaborations.
          </li>
          <li>
            <strong>Professional Experience:</strong> Currently at Sinfolix,
            previously at Spirit.
          </li>
          <li>
            Learn more about me by clicking <Link to={"/about"}>here</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShortAbout;
