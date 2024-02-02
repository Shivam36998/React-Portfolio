/** @format */

import React, { useState } from "react";
import Projects from "../parts/Projects";
import SingleProject from "../parts/SingleProject";
const Project = () => {

  let [fullCardData, setFullCardData] = useState({});
  let [projectSelect, setProjectSelect] = useState(false);
  let projectClickHandler = () => {};

  return (
    <div
      id="project"
      className="project">
      <h1 className="project_heading">Project Area</h1>
      {!projectSelect  && <Projects setFullCardData={setFullCardData} setProjectSelect={setProjectSelect}/>}
      {projectSelect && <SingleProject fullCardData={fullCardData} setFullCardData={setFullCardData} setProjectSelect={setProjectSelect}/>}

    </div>
  );
};

export default Project;
