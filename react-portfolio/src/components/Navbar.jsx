/** @format */

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { CloseTwoTone, MenuTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/material";

const Navbar = () => {
  let [lightMode, setLightMode] = useState(true);
  let [listShow, setListShow] = useState(window.screen.width > 450 ? true : false);

  console.log(window.screen.width);

  const handleTheme = () => {
    const root = document.documentElement;
    if (lightMode) {
      root.style.setProperty("--primary-blue", "#4a6fd1"); // Lighter primary blue
      root.style.setProperty("--light-blue", "#86c9ff"); // Lighter light blue
      root.style.setProperty("--medium-blue", "#5fa1ff"); // Lighter medium blue
      root.style.setProperty("--dark-blue", "#3a4d78"); // Lighter dark blue
      root.style.setProperty("--text-light", "#fff");
      root.style.setProperty("--background", "#1f1f1f"); // Dark background color
      root.style.setProperty("--black", "#858585");
      root.style.setProperty(
        "--background-gradient",
        "linear-gradient(to bottom, var(--dark-blue) 5%, transparent 95%)"
      );
      root.style.setProperty(
        "--background-gradient-mask",
        "linear-gradient(to bottom, #3a3a3a 15%, transparent 85%)"
      );
      root.style.setProperty("--background-transparent", "#3a3a3a"); // Lighter transparent background
    } else {
      root.style.setProperty("--primary-blue", "#3b57f4");
      root.style.setProperty("--light-blue", "#98e4ff");
      root.style.setProperty("--medium-blue", "#80b3ff");
      root.style.setProperty("--dark-blue", "#687eff");
      root.style.setProperty("--text-light", "#fff");
      root.style.setProperty("--background", "#fff");
      root.style.setProperty("--black", "#000");
      root.style.setProperty(
        "--background-gradient",
        "linear-gradient(to bottom, var(--light-blue) 5%, transparent 95%)"
      );
      root.style.setProperty(
        "--background-gradient-mask",
        "linear-gradient(to bottom, #5e9efd94 15%, transparent 85%)"
      );
      root.style.setProperty("--background-transparent", "#5e9efdb4");
    }

    setLightMode(!lightMode);
  };
  return (
    <div className={styles.NavArea}>
      <div className="sideIcon">Welcome</div>
      <div
        className={styles.menuIcon}
        onClick={() => setListShow(!listShow)}>
        {listShow ? <CloseTwoTone /> : <MenuTwoTone />}
      </div>
      <ul
        className={styles.navAreaListItems}
        style={listShow ? { display: "flex" } : { display: "none" }}>
        <li className={styles.navAreaListItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/about">About Me</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/edu">Education</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/skill">Skills</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/project">Projects</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/">Achievements</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className={styles.navAreaListItem}>
          <Link to="/">Hobby Glimpse</Link>
        </li>
        <li className={styles.navAreaListItem}>
          {lightMode ? (
            <DarkModeIcon onClick={handleTheme} />
          ) : (
            <LightModeIcon onClick={handleTheme} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
