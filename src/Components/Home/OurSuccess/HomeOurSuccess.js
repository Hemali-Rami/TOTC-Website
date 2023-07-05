import React from "react";
import SuccessInfo from "./SuccessInfo";
import Fade from "react-reveal/Fade";
const HomeOurSuccess = () => {
  return (
    <div className="oursucessmain">
      <div className="container">
        <div className="oursucesspart">
          <Fade bottom delay={1700}>
            <div className="sectionmaininfo">
              <h2>Our Success</h2>
              <p>
                Ornare id fames interdum porttitor nulla turpis etiam. Diam
                vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a
                quis ultrices eu ornare tristique vel nisl orci.
              </p>
            </div>
          </Fade>
          <SuccessInfo />
        </div>
      </div>
    </div>
  );
};

export default HomeOurSuccess;
