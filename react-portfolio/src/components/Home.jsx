/** @format */

import React from "react";
import IconCards from "../bits/IconCards";
import CallIcon from "@mui/icons-material/Call";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import WebStoriesIcon from "@mui/icons-material/WebStories";

const Home = () => {
  return (
    <div
      id="home"
      className="home">
      <div className="home_intro_area moving-element move-left">
        <h1 className="text_blue">Hello World!</h1>
        <h2 className="text_normal">I am Shivam Prajapati</h2>
        <h3 className="text_blue">Full Stack Developer, Data Analyst</h3>
        <p className="text_normal">
          Hi there, I am Shivam, a pre-final year student at IIT BHU strving to
          make my dreams into reality!
        </p>
        <div className="homeicons">
          <IconCards
            icon={<CallIcon />}
            text={"Fix A Call"}
          />
          <IconCards
            icon={<CloudDownloadIcon />}
            text={"DownLoad Resume"}
            link={
              "https://drive.google.com/file/d/1znHWJS6fgoGC4rj9tWQb257wpH4Orzd0/view?usp=sharing"
            }
          />
          <IconCards
            icon={<WebStoriesIcon />}
            text={"Go to Projects"}
            link="/project"
          />
        </div>
      </div>
      <div className="home_image_area moving-element move-bottom">
        <div className="home_image_circle">
          <img
            src="/images/profilebw.png"
            alt=""
            className="home_masked_profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
