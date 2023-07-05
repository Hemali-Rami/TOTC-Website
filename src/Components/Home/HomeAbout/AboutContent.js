import React from "react";
import HomeAbout from "./HomeAbout";
import About from "./About";
import Pulse from "react-reveal/Pulse";
const AboutContent = () => {
  return (
    <div className="homeaboutwrap">
      <div className="container">
        <div className="homeaboutpart">
          <div className="sectionmaininfo">
            <Pulse>
              <h3 className="color_head">
                What is <span>TOTC?</span>
              </h3>
            </Pulse>
            <Pulse>
              <p>
                TOTC is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </Pulse>
          </div>
          <HomeAbout />
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
