/** @format */

import React from "react";
import styles from "./ShortExp.module.css";
import experience from "../assets/experience";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div>{item.company}</div>
      <div>
        <span>{item.title}</span>
        <span>{item.date}</span>
      </div>
    </div>
  );
};

const ShortExp = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pagePart}>
        <h2>Experience</h2>
        <h6>
          Bringing a blend of innovation, expertise, and dedication to every
          project, ensuring impactful results
        </h6>
      </div>
      <div className={styles.pagePart}>
        {experience.map((item, key) => (
          <Card
            key={key}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortExp;
