/** @format */

import React from "react";

const Skill = () => {
  return (
    <div
      id="skill"
      className="skill">
      <div className="skill_list_area">
        <h1 className="skill_heading text_normal">Skills</h1>
        <div className="skill_list">
          <div className="skill_category">
            <h4>Programming Language</h4>
            <div className="">
              <ul>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    alt="C"
                  />
                  <span>C</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                  />
                  <span>C++</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                  />
                  <span>Python</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="Javascript"
                  />
                  <span>Javascript</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill_category">
            <h4>Frameworks and Libraries</h4>
            <div className="">
              <ul>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React Js"
                  />
                  <span>React Js</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node JS"
                  />
                  <span>Node JS</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express Js"
                  />
                  <span>Express Js</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill_category">
            <h4>Database, Tools and Language</h4>
            <div className="">
              <ul>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                  />
                  <span>MongoDB</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                  />
                  <span>PostgreSQL</span>
                </li>
                <li className="skill_item">
                  <img
                    src="/skillImages/excellogo.svg"
                    alt="Microsoft Excel"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <span>Excel</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill_category">
            <h4>Version Control Tools and IDE</h4>
            <div className="">
              <ul>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                  />
                  <span>Git</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Github"
                  />
                  <span>Github</span>
                </li>
                <li className="skill_item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                  />
                  <span>VS Code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill_category">
            <h4>Interests</h4>
            <div className="">
              <ul>
                <li>Software Development</li>
                <li>Full Stack Development</li>
                <li>Data Analyst</li>
                <li>Data Structure and Algorithm</li>
              </ul>
            </div>
          </div>

          <div className="skill_category">
            <h4>Soft Skills</h4>
            <div className="">
              <ul>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
