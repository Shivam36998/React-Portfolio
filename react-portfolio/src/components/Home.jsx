/** @format */

import React, {useEffect} from "react";
import IconCards from "../bits/IconCards";
import CallIcon from "@mui/icons-material/Call";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import ShortAbout from "../parts/ShortAbout";
import ShortSkills from "../parts/ShortSkills";
import ShortProject from "../parts/ShortProject";
import ShortExp from "../parts/ShortExp";
import { useNavigate } from "react-router-dom";
import HireButton from "../parts/HireButton";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    setTimeout(scrollToTop, 200);
  }, []);
  return (
    <>
      <div
        id="home"
        className="home">
        <div className="home_intro_area moving-element move-left">
          <h1 className="text_blue">Hello World!</h1>
          <h1 className="text_normal">I am Shivam Prajapati</h1>
          <h2 className="text_blue">Full Stack Developer, Data Analyst</h2>
          <p className="text_normal">
            Hi there, I am Shivam, a pre-final year student at IIT BHU striving
            to make my dreams into reality!
          </p>
          <div className="homeicons">
            <IconCards
              icon={<CallIcon />}
              text={"Fix A Call"}
              link={"/fixCall"}
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
      <ShortAbout />
      <ShortSkills />
      <ShortProject />
      <ShortExp />
      <HireButton />
    </>
  );
};

export default Home;
