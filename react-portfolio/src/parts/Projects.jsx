/** @format */

import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const Projects = (props) => {
  let projects = [
    {
      id: "1",
      name: "Client-Audio Project",
      category: "Full Stack",
      tags: [
        "HTML",
        "CSS",
        "JS",
        "ReactJs",
        "Mongoose",
        "ExpressJs",
        "NodeJs",
        "Toastify",
        "jsonwebtoken",
      ],
      filters: ["FrontEnd", "HTML", "CSS", "JS", "ReactJs"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe
            dolores tenetur nisi pariatur natus hic deserunt ut. Reiciendis,
            iure soluta aliquid fugit accusamus voluptate a deserunt facilis
            perspiciatis dolorem distinctio dignissimos nulla itaque suscipit
            aut aliquam. Minus recusandae, quidem magni perferendis, maiores
            vitae esse nam fugit nulla laborum et?`,
      code: "https://github.com/Shivam36998/crm",
      ReadmeLink: "",
      link: "https://crm-client-navy.vercel.app/",
      frontImage: "/projectImage/crm.png",
      images: [],
    },
    {
      id: "2",
      name: "Jagriti (IIT BHU)",
      category: "Backend",
      tags: ["NodeJs", "Express Js", "Mongoose"],
      filters: [""],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe
            dolores tenetur nisi pariatur natus hic deserunt ut. Reiciendis,
            iure soluta aliquid fugit accusamus voluptate a deserunt facilis
            perspiciatis dolorem distinctio dignissimos nulla itaque suscipit
            aut aliquam. Minus recusandae, quidem magni perferendis, maiores
            vitae esse nam fugit nulla laborum et?`,
      code: "https://github.com/Shivam36998/JagritiWebsite-backend",
      ReadmeLink: "",
      link: "https://jagritissc.com/",
      frontImage: "/projectImage/jagriti.png",
      images: [],
    },
    {
      id: "3",
      name: "TextTango-ChatApp",
      category: "Backend",
      tags: [
        "HTML",
        "CSS",
        "JS",
        "ReactJs",
        "Toastify",
        "Socket",
        "NodeJs",
        "ExpressJs",
        "Mongoose",
      ],
      filters: ["FrontEnd", "HTML", "CSS", "JS", "ReactJs"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe
            dolores tenetur nisi pariatur natus hic deserunt ut. Reiciendis,
            iure soluta aliquid fugit accusamus voluptate a deserunt facilis
            perspiciatis dolorem distinctio dignissimos nulla itaque suscipit
            aut aliquam. Minus recusandae, quidem magni perferendis, maiores
            vitae esse nam fugit nulla laborum et?`,
      code: "https://github.com/Shivam36998/text-tango",
      ReadmeLink: "",
      link: "",
      frontImage: "/projectImage/texttango.png",
      images: [],
    },
    {
      id: "4",
      name: "Sticky Notes",
      category: "FrontEnd",
      tags: ["HTML", "CSS", "JS", "ReactJs", "Firebase"],
      filters: ["FrontEnd", "HTML", "CSS", "JS", "ReactJs"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe
            dolores tenetur nisi pariatur natus hic deserunt ut. Reiciendis,
            iure soluta aliquid fugit accusamus voluptate a deserunt facilis
            perspiciatis dolorem distinctio dignissimos nulla itaque suscipit
            aut aliquam. Minus recusandae, quidem magni perferendis, maiores
            vitae esse nam fugit nulla laborum et?`,
      code: "https://github.com/Shivam36998/sinfolix-stickyNotes",
      ReadmeLink: "",
      link: "",
      frontImage: "/projectImage/stickyNotes.png",
      images: [],
    },
    {
      id: "5",
      name: "Dice Game",
      category: "FrontEnd",
      tags: ["HTML", "CSS", "JS", "ReactJs"],
      filters: ["FrontEnd", "HTML", "CSS", "JS", "ReactJs"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe
            dolores tenetur nisi pariatur natus hic deserunt ut. Reiciendis,
            iure soluta aliquid fugit accusamus voluptate a deserunt facilis
            perspiciatis dolorem distinctio dignissimos nulla itaque suscipit
            aut aliquam. Minus recusandae, quidem magni perferendis, maiores
            vitae esse nam fugit nulla laborum et?`,
      code: "https://github.com/Shivam36998/dice-game",
      ReadmeLink: "",
      link: "",
      frontImage: "/projectImage/dice.png",
      images: [],
    },
    {
      id: "6",
      name: "Dice Game",
      category: "FrontEnd",
      tags: ["JS", "ReactJs"],
      filters: ["FrontEnd", "HTML", "CSS", "JS", "ReactJs"],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe
            dolores tenetur nisi pariatur natus hic deserunt ut. Reiciendis,
            iure soluta aliquid fugit accusamus voluptate a deserunt facilis
            perspiciatis dolorem distinctio dignissimos nulla itaque suscipit
            aut aliquam. Minus recusandae, quidem magni perferendis, maiores
            vitae esse nam fugit nulla laborum et?`,
      code: "https://github.com/Shivam36998/techroadmap",
      ReadmeLink: "",
      link: "https://techroadmap.vercel.app/",
      frontImage: "/projectImage/techRoadMap.png",
      images: [],
    },
  ];

  const filters = [
    "FrontEnd",
    "BackEnd",
    "FullStack",
    "HTML",
    "CSS",
    "JS",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "Socket",
    "Material UI",
    "MongoDB",
    "SQL",
  ];

  let [projectList, setProjectList] = useState(projects);

  let [isProjectAll, setIsProjectAll] = useState(false);
  const projectAllHandler = () => {
    document.querySelector(".projects_area").style.height = "auto";
    setIsProjectAll(true);
  };
  const projectLessHandler = () => {
    document.querySelector(".projects_area").style.height = "60vh";
    setIsProjectAll(false);
  };

  const passCardData = (data) => {
    props.setFullCardData(data);
    props.setProjectSelect(true);
  };

  const FrontCard = (props) => {
    const {
      id,
      name,
      category,
      tags,
      filters,
      description,
      code,
      link,
      frontImage,
      images,
    } = props.item;
    let taglist = "";
    for (let i = 0; i < filters.length; i++) {
      taglist += "#";
      taglist += filters[i];
      taglist += " ";
    }
    let [title, setTitle] = useState("");
    return (
      <div
        className="project_card moving-element move-left"
        onMouseEnter={() => setTitle(name)}
        onMouseLeave={() => setTitle("")}>
        <div className="project_card_title">{title}</div>
        <img
          onClick={() => passCardData(props.item)}
          className="project_card_front_image"
          src={frontImage}
        />
      </div>
    );
  };

  return (
    <>
      <div className="projects_area">
        {projectList.map((item, index) => (
          <FrontCard
            key={index}
            item={item}
          />
        ))}
      </div>
      {/* <button
        className="project_all_button"
        onClick={() =>
          isProjectAll ? projectLessHandler() : projectAllHandler()
        }>
        {isProjectAll ? "Show Less" : "Show All"}
      </button> */}
    </>
  );
};

export default Projects;
