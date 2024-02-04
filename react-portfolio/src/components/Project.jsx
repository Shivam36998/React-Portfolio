/** @format */

import React, { useState } from "react";
import Projects from "../parts/Projects";
import SingleProject from "../parts/SingleProject";
const Project = () => {

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
