/** @format */

import React, { useState, useEffect } from "react";

const Education = () => {
  let [tran, setTran] = useState(0);
  let [full, setFull] = useState(0);
  let [content, setContent] = useState(
    "Hover on the dots in between to explore full"
  );

  const general = (
    <p className="moving-element move-top">
      <h1 className="text_blue"> My Education </h1>
      <p className="text_normal">
        {" "}
        Here is a quick Timeline of my educational journey
      </p>
    </p>
  );

  const HighSchool = (
    <>
      <h1 className="text_orange"> High School </h1>
      <h3 className="text_normal"> St. Xavier's Sr. Sec. School</h3>
      <p className="text_normal"> Police Line Road, Kannauj</p>
      <h2 className="text_white"> Percentage - 96.2%</h2>
      <h3 className="text_normal">
        {" "}
        Subjects :- Maths, Science, Information Technology, English, Hindi,
        Social Science
      </h3>
    </>
  );

  const Intermediate = (
    <>
      <h1 className="text_orange"> InterMediate </h1>
      <h3 className="text_normal"> St. Xavier's Sr. Sec. School</h3>
      <p className="text_normal"> Police Line Road, Kannauj</p>
      <h2 className="text_white"> Percentage - 95.2%</h2>
      <h3 className="text_normal">
        {" "}
        Subjects :- Maths, Physics, Chemistry, Information Technology, English,
        Physical Education
      </h3>
    </>
  );

  const BTech = (
    <>
      <h1 className="text_orange"> Bachelor Of Technology </h1>
      <h3 className="text_normal"> Indian Institute of Technology, Varanasi</h3>
      <h2 className="text_white"> CGPA :- 8.33</h2>
      <h3 className="text_normal">
        {" "}
        Branch - Pharmaceutical Engineering and Technology
      </h3>
    </>
  );

  const fullHandler = () => {
    if (full === 0) {
      setFull(1);
    } else {
      setFull(0);
    }
  };

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
      id="education"
      className="education">
      <div className="ed_description">{general}</div>
      {full === 0 ? (
        <div className="ed_main_row">
          <div className="education_timeline moving-element move-left">
            <div className="education_line"></div>
            <div className="education_timeBoxes">
              <div
                className="education_timeBox"
                onMouseOver={() => {
                  setContent(HighSchool);
                  setTran(1);
                }}
                onMouseLeave={() => {
                  setContent("Hover on the dots in between to explore full");
                  setTran(0);
                }}>
                <div className="ed_box text_normal">2019</div>
                <div className="ed_lines"></div>
                <div className="ed_circle"></div>
                <div className="ed_lines"></div>
                <div className="ed_box text_normal"> High School </div>
              </div>
              <div
                className="education_timeBox"
                onMouseOver={() => {
                  setContent(Intermediate);
                  setTran(1);
                }}
                onMouseLeave={() => {
                  setContent("Hover on the dots in between to explore full");
                  setTran(0);
                }}>
                <div className="ed_box text_normal">2021</div>
                <div className="ed_lines"></div>
                <div className="ed_circle"></div>
                <div className="ed_lines"></div>
                <div className="ed_box text_normal"> InterMediate </div>
              </div>
              <div
                className="education_timeBox"
                onMouseOver={() => {
                  setContent(BTech);
                  setTran(1);
                }}
                onMouseLeave={() => {
                  setContent("Hover on the dots in between to explore full");
                  setTran(0);
                }}>
                <div className="ed_box text_normal">Current</div>
                <div className="ed_lines"></div>
                <div className="ed_circle"></div>
                <div className="ed_lines"></div>
                <div className="ed_box text_normal"> B. Tech </div>
              </div>
            </div>
          </div>
          <div
            className="ed_edFullBox moving-element move-right"
            style={
              content === "Hover on the dots in between to explore full"
                ? { height: "auto", color: "rgb(238, 255, 0)" }
                : {}
            }>
            {content}
          </div>
        </div>
      ) : (
        <div className="ed_main_row">
          <div className="ed_edFullBox moving-element move-left">
            {HighSchool}
          </div>
          <div className="ed_edFullBox moving-element move-left">
            {Intermediate}
          </div>
          <div className="ed_edFullBox moving-element move-left">{BTech}</div>
        </div>
      )}
      <div className="full_ed_button moving-element move-bottom">
        <button onClick={fullHandler}>
          {full == 0 ? "Read Full Timeline" : "Back"}
        </button>
      </div>
    </div>
  );
};

export default Education;
