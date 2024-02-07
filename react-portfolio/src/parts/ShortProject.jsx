/** @format */

import React from "react";
import projects from "../assets/projects";
import styles from "./ShortProject.module.css";
import { useNavigate } from "react-router-dom";

const ShortProject = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.row}>
        <h2>PortFolio Highlights</h2>
        <span onClick={() => navigate("/project")}>(See More)</span>
      </div>

      <div className={styles.list}>
        {projects.slice(0, 3).map((item, key) => {
          return (
            <div
              className={styles.card}
              key={key}
              onClick={() => navigate("/singleProject", { state: item })}>
              <div className={styles.imgbox}>
                <img
                  src={item.frontImage}
                  alt=""
                />
              </div>
              <div className={styles.name}>{item.name}
              <span> Click to see Details</span>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShortProject;
