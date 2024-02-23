/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../assets/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

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
    return (
      <div className="project_card moving-element move-left">
        <div className="project_card_hidden">
          <div className="project_card_icons">
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer">
              <span>
                <GitHubIcon />
                Code
              </span>
            </a>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer">
              <span>
                <LanguageIcon />
                Live
              </span>
            </a>

            <span onClick={() => passCardData(props.item)}>
              <FullscreenIcon />
              More
            </span>
          </div>
          <div className="project_card_tags">
            {tags.slice(0, 8).map((tg, ind) => {
              return <span>{tg}</span>;
            })}
          </div>
        </div>
        <img
          onClick={() => passCardData(props.item)}
          className="project_card_front_image"
          src={frontImage}
        />
        <div className="project_card_title">{name}</div>
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
