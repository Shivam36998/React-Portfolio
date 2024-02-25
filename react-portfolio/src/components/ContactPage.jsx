/** @format */

import React, { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import IconCards from "../bits/IconCards";
import { GitHub, Twitter } from "@mui/icons-material";

const ContactPage = () => {
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
    <div
      id="contact"
      className="contact">
      <div className="contact_upper_div">
        <h1 className="">Let's Create Something Together!</h1>
        <div className="cont_first_row">
          <button className="contact_mail_button">
            <a href="mailto:shivbhu2112564@gmail.com">
              Mail me at: shivbhu2112564@gmail.com
            </a>
          </button>
          <button className="resume_button">
            <a
              href="https://drive.google.com/file/d/1JLecJ3tV9JvqQ2DLyBEGFWJfLF5Xp94i/view?usp=sharing"
              target="_blank">
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="contact_right_div">
        <div className="contact_social_media">
          <IconCards
            icon={<CallIcon />}
            text={"Fix A Call"}
            link={"/fixCall"}
          />
          <IconCards
            icon={<GitHub />}
            text={"Github"}
            link={"https://github.com/Shivam36998"}
          />
          <IconCards
            icon={<LinkedInIcon />}
            text={"LinkedIn"}
            link="https://www.linkedin.com/in/shivam-prajapati-66ba92226/"
          />
          <IconCards
            icon={<InstagramIcon />}
            text={"Instagram"}
            link="https://www.instagram.com/shivamprajapati__7/"
          />
          <IconCards
            icon={<TwitterIcon />}
            text={"(X)"}
            link="https://twitter.com/gunehgar__7"
          />
        </div>
        <div className="cont_agency_block">
          Or Visit Our Agency :{" "}
          <IconCards
            icon={<LinkedInIcon />}
            text={"First Tech Solutions"}
            link="/project"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
