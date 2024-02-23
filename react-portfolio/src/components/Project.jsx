/** @format */

import React, { useState, useEffect } from "react";
import Projects from "../parts/Projects";
import SingleProject from "../parts/SingleProject";
const Project = () => {
    useEffect(() => {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      setTimeout(scrollToTop, 200);
    }, []);

  return (
    <div
      id="project"
      className="project">
      <h1 className="project_heading">Project Area</h1>
      <Projects />
    </div>
  );
};

export default Project;
