/** @format */

import React, { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
      <div className="contact_left_div">
        <h1 className="text_blue">Let's Create Something Together!</h1>
        <p className=" text_normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          perspiciatis. Sed, reprehenderit?
        </p>
        <button className="contact_mail_button">
          <a
            href="mailto:shivbhu2112564@gmail.com"
            className="contact_mail_button">
            Mail me at: shivbhu2112564@gmail.com
          </a>
        </button>
        <div className="contact_social_media  text_normal">
          Connect With Me At :{"  "}
          <div className="contact_social_media_box">
            <a
              href=""
              className="social_media_icons">
              <LinkedInIcon />
            </a>
            <a
              href=""
              className="social_media_icons">
              <InstagramIcon />
            </a>
            <a
              href=""
              className="social_media_icons">
              X
            </a>
            <a
              href=""
              className="social_media_icons">
              T
            </a>
          </div>
        </div>
        <button className="resume_button">
          <a
            href="https://drive.google.com/file/d/11qF561lM9bV_id4bIOznv2TX3CoFeWQ2/view?usp=sharing"
            target="_blank"
            className="text-white">
            Download Resume
          </a>
        </button>
      </div>
      <div className="contact_right_div">
        <form action="">
          <label
            htmlFor="name"
            className="contact_formlabel text_normal">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="contact_forminput text_normal"
          />
          <label
            htmlFor="email"
            className="contact_formlabel text_normal">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="contact_forminput text_normal"
          />
          <label
            htmlFor="subject"
            className="contact_formlabel text_normal">
            Tell me about your project
          </label>
          <input
            type="textbox"
            id="subject"
            className="contact_formtextbox text_normal"
          />
          <button
            className="contact_send_message"
            onClick={() =>
              alert(
                "server glitch, try contacting on instagram @shivamprajapati__7"
              )
            }>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
