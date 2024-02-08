/** @format */

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ContrastIcon from "@mui/icons-material/Contrast";
import { CloseTwoTone, MenuTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/material";
import colorThemes from "../assets/colorThemes";

const Navbar = () => {
  let [lightMode, setLightMode] = useState(true);
  let [themesModal, setThemesModal] = useState(false);
  let [listShow, setListShow] = useState(
    window.screen.width > 450 ? true : false
  );

  const handleTheme = (color) => {
    const pallete = colorThemes.find((item) => item.name === color);
    let theme = lightMode ? pallete.light : pallete.dark;
    const root = document.documentElement;
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--secondary-color", theme.secondaryColor);
    root.style.setProperty("--tertiary-color", theme.tertiaryColor);
    root.style.setProperty("--dark-primary", theme.darkPrimary);
    root.style.setProperty("--light-transparent", theme.lightTransparent);
    root.style.setProperty("--text", theme.text);
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--background-light", theme.backgroundLight);
    root.style.setProperty("--darktext", theme.darkText);
    root.style.setProperty("--darkgray", theme.darkGray);
    root.style.setProperty(
      "--background-gradient-mask",
      theme.backgroundGradientMask
    );
  };

  const clickHandler = () => {
    console.log("here");
    if (window.screen.width < 450) setListShow(false);
  };

  return (
    <div className={styles.NavArea}>
      <div className={styles.sideIcon}>Welcome</div>
      <div className={styles.navRightPart}>
        <div
          className={styles.menuIcon}
          onClick={() => setListShow(!listShow)}>
          {listShow ? <CloseTwoTone /> : <MenuTwoTone />}
        </div>
        <ul
          className={styles.navAreaListItems}
          style={listShow ? { display: "flex" } : { display: "none" }}>
          <li className={styles.navAreaListItem}>
            <Link
              to="/"
              onClick={() => {
                clickHandler();
              }}>
              Home
            </Link>
          </li>
          <li className={styles.navAreaListItem}>
            <Link
              to="/about"
              onClick={() => {
                clickHandler();
              }}>
              About Me
            </Link>
          </li>
          <li className={styles.navAreaListItem}>
            <Link
              to="/edu"
              onClick={() => {
                clickHandler();
              }}>
              Education
            </Link>
          </li>
          <li className={styles.navAreaListItem}>
            <Link
              to="/skill"
              onClick={() => {
                clickHandler();
              }}>
              Skills
            </Link>
          </li>
          <li className={styles.navAreaListItem}>
            <Link
              to="/project"
              onClick={() => {
                clickHandler();
              }}>
              Projects
            </Link>
          </li>
          <li className={styles.navAreaListItem}>
            <Link
              to="/exp"
              onClick={() => {
                clickHandler();
              }}>
              Experience
            </Link>
          </li>
          <li className={styles.navAreaListItem}>
            <Link
              to="/contact"
              onClick={() => {
                clickHandler();
              }}>
              Contact Me
            </Link>
          </li>
        </ul>
        <div className={styles.navAreaListItem}>
          <ContrastIcon onClick={() => setThemesModal(!themesModal)} />
          {themesModal ? (
            <div
              className={styles.themesModal}
              onClick={() => setThemesModal(false)}>
              <div>
                <ul>
                  <li
                    style={{ backgroundColor: "#ff8c00" }}
                    onClick={() => handleTheme("orange")}></li>
                  <li
                    style={{ backgroundColor: "#4caf50" }}
                    onClick={() => handleTheme("green")}></li>
                  <li
                    style={{ backgroundColor: "#e53935" }}
                    onClick={() => handleTheme("red")}></li>
                  <li
                    style={{ backgroundColor: "#795548" }}
                    onClick={() => handleTheme("brown")}></li>
                  <li
                    style={{ backgroundColor: "#673ab7" }}
                    onClick={() => handleTheme("purple")}></li>
                  <li
                    style={{ backgroundColor: "#3b57f4" }}
                    onClick={() => handleTheme("blue")}></li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
