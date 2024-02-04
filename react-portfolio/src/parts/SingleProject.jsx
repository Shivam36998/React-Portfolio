/** @format */

import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Category } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const SingleProject = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

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
  } = location.state;
  return (
    <div>
      <div className="project_fc">
        <CancelIcon
          className="cancalIcon"
          onClick={() => navigate("/project")}
        />
        <div className="project_fc_left_div">
          <img
            className="project_fc_image"
            src={frontImage}
          />
          <h1 className="text_normal">{name}</h1>
          <h3 className="text_blue">Category :- {category}</h3>
          <div className="project_button_box">
            <a
              href={link}
              target="_blank">
              <button className="project_button text_normal">Live</button>
            </a>
            <a
              href={code}
              target="_blank">
              <button className="project_button text_normal">View Code</button>
            </a>
            {/* <button className="project_button text_normal">A glimpse</button> */}
          </div>
        </div>
        <div className="project_fc_right_div">
          <p className="project_tags text_normal">
            {tags.map((item, key) => (
              <span key={key}>{`${item},`} </span>
            ))}
          </p>
          <p
            id="projectDesc"
            className="project_desc text_normal">
            {description}
          </p>
          <p className="readme_link">
            <a href="">Read Full Documentation</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
