/** @format */

import React from "react";
import styles from "./ShortExp.module.css";
import experience from "../assets/experience";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  let navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => navigate("/exp")}>
      <h1>{item.company}</h1>
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
        <h1>Experience</h1>
        <h6>
          Bringing a blend of innovation, expertise, and dedication to every
          project, ensuring impactful results
        </h6>
      </div>
      <div className={styles.pagePart}>
        {experience.slice(0, 3).map((item, key) => (
          <Card
            key={key}
            item={item}
          />
        ))}
        <Card
          item={{
            company: "See More",
            title: "Click for furthur hands-on experience",
            link: "/exp",
          }}
        />
      </div>
    </div>
  );
};

export default ShortExp;
