/** @format */

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div
      id="about"
      className="about_main_div ">
      <div className="about_upper_row">
        <div className="about_left_div moving-element move-left">
          <img
            src="/images/fullPhoto.png"
            alt=""
          />
          <div></div>
        </div>
        <div className="about_right_div moving-element move-top">
          <h1>About Me</h1>
          <div>
            <span
              role="img"
              aria-label="rocket">
              🚀
            </span>{" "}
            <p>
              Hey there, I'm Shivam Prajapati, a B.Tech student at IIT (BHU), and I'm all
              set to graduate in 2025 with a solid CGPA of 8.33. My academic
              journey is a testament to my dedication to learning and growth,
              and I'm thrilled to bring my passion for excellence to the tech
              realm.
            </p>
            </div>

            <div>
            <span
              role="img"
              aria-label="rocket">
              🚀
            </span>{" "}
            <p>
              I'm not just your average tech enthusiast - I wield proficiency in
              a range of programming languages and tools, from C++, JavaScript,
              HTML, and CSS to a versatile toolkit including NodeJS, Express.JS,
              MongoDB, ReactJS, Git, GitHub, VSCode, and Bootstrap. But it's not
              just about the technical stuff - my approach is also marked by
              subtle qualities like a hardworking ethos, unwavering dedication,
              and effective communication and teamwork skills.
            </p>
            </div>
            <div>
            <span
              role="img"
              aria-label="rocket">
              🚀
            </span>{" "}
            <p>
              Beyond the classroom, I've dived into various projects that have
              been dynamic learning experiences, where my hard work has blended
              with a genuine love for technology. These endeavors have not only
              refined my problem-solving skills but also provided me with
              insights into the multifaceted world of technology. I'm driven by
              a fervor for Full Stack Web Development, Backend Development, and
              the intriguing field of Data analysis.
            </p>
            </div>
            <div>
            <span
              role="img"
              aria-label="rocket">
              🚀
            </span>{" "}
            <p>
              I'm eager to apply my skills in practical scenarios and I'm always
              up for engaging discussions, exploring collaborations, or sharing
              insights into the ever-evolving tech landscape. I'm enthusiastic
              about embracing new opportunities and contributing to innovative
              endeavors!
            </p>
          </div>

          <div className="about_lower_row">
            <div className="about_lower_first_row">
              <div className="text_blue">
                Based in: <span className="text_normal">India</span>
              </div>
              <div className="text_blue">
                Current Company: <span className="text_normal">Sinfolix</span>{" "}
              </div>
              <div className="text_blue">
                Last Company: <span className="text_normal">Spirit</span>{" "}
              </div>
            </div>
            <div className="about_lower_second_row">
              <div>
                <a
                  href=""
                  className="social_media_icons">
                  <GitHubIcon />
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="social_media_icons">
                  <LinkedInIcon />
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="social_media_icons">
                  X
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="social_media_icons">
                  <EmailIcon />
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="social_media_icons">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
