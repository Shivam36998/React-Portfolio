/** @format */

import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import projects from "../assets/projects";

const Projects = () => {
  const filters = [
    "FrontEnd",
    "BackEnd",
    "FullStack",
    "HTML",
    "CSS",
    "JS",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "Socket",
    "Material UI",
    "MongoDB",
    "SQL",
  ];

  let [projectList, setProjectList] = useState(projects);

  let [isProjectAll, setIsProjectAll] = useState(false);

  const navigate = useNavigate();

  const projectAllHandler = () => {
    document.querySelector(".projects_area").style.height = "auto";
    setIsProjectAll(true);
  };
  const projectLessHandler = () => {
    document.querySelector(".projects_area").style.height = "60vh";
    setIsProjectAll(false);
  };

  const passCardData = (data) => {
    navigate("/singleProject", { state: data });
  };

  const FrontCard = (props) => {
    const {
      id,
      name,
      category,
      tags,
      filters,
      description,
      code,
      link,
      frontImage,
      images,
    } = props.item;
    let taglist = "";
    for (let i = 0; i < filters.length; i++) {
      taglist += "#";
      taglist += filters[i];
      taglist += " ";
    }
    let [title, setTitle] = useState("");
    return (
      <div
        className="project_card moving-element move-left"
        onMouseEnter={() => setTitle(name)}
        onMouseLeave={() => setTitle("")}>
        <div className="project_card_title">{title}</div>
        <img
          onClick={() => passCardData(props.item)}
          className="project_card_front_image"
          src={frontImage}
        />
      </div>
    );
  };

  return (
    <>
      <div className="projects_area">
        {projectList.map((item, index) => (
          <FrontCard
            key={index}
            item={item}
          />
        ))}
      </div>
      {/* <button
        className="project_all_button"
        onClick={() =>
          isProjectAll ? projectLessHandler() : projectAllHandler()
        }>
        {isProjectAll ? "Show Less" : "Show All"}
      </button> */}
    </>
  );
};

export default Projects;
