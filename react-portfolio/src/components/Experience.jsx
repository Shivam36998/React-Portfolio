/** @format */

import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const Item = ({ item }) => {
  return (
    <div className="exp_item">
      <div className="exp_timeline_icon">
        <WorkHistoryIcon />
      </div>
      <div className="exp_card">
        <h1>{item.company}</h1>
        <div className="exp_card_second_row">
          <h3 className="text_orange">{item.title}</h3>
          <p>{item.date}</p>
        </div>
        <div>
          <ul>
            {item.description.map((point, key) => {
              return <li key={key}>{point}</li>;
            })}
          </ul>
        </div>
        {item.links.length > 0 && (
          <div>
            <span className="text_orange">Links :- </span>
            {item.links.map((link, key) => (
              <a
                href={link.link}
                className="exp_links"
                key={key}>
                {link.text}
              </a>
            ))}
          </div>
        )}
        {item.projects.length > 0 && (
          <div>
            <span className="text_orange">Works :- </span>
            {item.projects.map((link, key) => (
              <a
                href={link.link}
                className="exp_links"
                key={key}>
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const all = [
    {
      title: "Full Stack Developer",
      company: "Sinfolix Technologies",
      date: "Decemeber 2023 - present",
      description: [
        "Two-phase internship showcased adaptability and proficiency in diverse tech stacks",
        "Active contribution to projects (notes app, chat app) in the     initial phase, exploring technologies like Socket.IO, Toastify, and Redux.",
        "Second phase collaboration in a team of five for Job Recruitment Portal development, enhancing technical and collaborative skills.",
      ],
      links: [
        { text: "Website", link: "" },
        { text: "Offer Letter", link: "" },
      ],
      projects: [
        { text: "Job Portal", link: "" },
        { text: "sticky Notes", link: "" },
        { text: "Chat App", link: "" },
        { text: "ecommerce", link: "" },
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Jagriti",
      date: "January 2023 - present",
      description: [
        "Headed a 4-member team for the Jagriti college fest website, showcasing leadership.",
        " Managed backend operations, emphasizing CRUD functionalities for robust data management.",
        "Executed crucial contributions to frontend development, enhancing the overall user experience.",
      ],
      links: [
        { text: "Website", link: "" },
        // { text: "POR certificate", link: "" },
      ],
      projects: [
        { text: "Frontend-Client", link: "" },
        { text: "Frontend-Admin", link: "" },
        { text: "Backend", link: "" },
      ],
    },
    {
      title: "Technical Team Head",
      company: "Spirit",
      date: "January 2023 - present",
      description: [
        "Technical Head, Spirit, IIT BHU, leading the development of a conference website using React.",
        "Focused on crafting a responsive and visually appealing UI to enhance user experience.",
        "Empowering students to explore and register for diverse opportunities through the intuitive platform.",
      ],
      links: [
        { text: "Website", link: "" },
        // { text: "POR certificate", link: "" },
      ],
      projects: [{ text: "Github", link: "" }],
    },
    {
      title: "Co-Head",
      company: "Career Council, IIT BHU",
      date: "June 2023 - March 2023",
      description: [
        "Led a 25-member team ",
        "Spearheaded initiatives like acing placements, acing internships, encore, and chit chat with seniors",
        "Played a pivotal role in enhancing career-related programs and resources within the department.",
      ],
      links: [],
      projects: [],
    },
  ];
  return (
    <div className="exp">
      <h1>Experience</h1>
      <h6>
        Bringing a blend of innovation, expertise, and dedication to every
        project, ensuring impactful results
      </h6>
      <div>
        {/* <div className="exp_background_line"></div> */}
        <div className="exp_list_area">
          {all.map((item, key) => {
            return (
              <Item
                item={item}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
