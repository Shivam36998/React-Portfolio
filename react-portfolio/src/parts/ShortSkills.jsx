/** @format */

import React from "react";
import styles from "./ShortSkills.module.css";

const Circle = ({ text }) => {
  return <div className={styles.circle}>{text}</div>;
};

const ShortSkills = () => {
  let skills = [
    "ReactJS",
    "Node.js",
    "Express.js",
    "Mongoose",
    "C++",
    "C",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Excel",
    "GitHub",
    "Git",
    "VSCode",
  ];

  return (
    <div className={styles.page}>
      <h2>SkillSet Overview</h2>
      <div>
        {skills.map((item, key) => (
          <Circle
            text={item}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortSkills;
