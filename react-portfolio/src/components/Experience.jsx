/** @format */

import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import experience from "../assets/experience";

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
          {experience.map((item, key) => {
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
