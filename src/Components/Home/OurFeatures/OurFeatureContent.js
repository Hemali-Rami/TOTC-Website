import React from "react";
import Features from "./Features";
import Fade from "react-reveal/Fade";
const OurFeatureContent = () => {
  return (
    <div className="ourfeaturewrap">
      <div className="container">
        <div className="ourfeatrurepart">
          <Fade up>
            <div className="sectionmaininfo">
              <h3 className="color_head">
                Our <span>Features</span>
              </h3>
              <p>
                This very extraordinary feature, can make learning activities
                more efficient
              </p>
            </div>
          </Fade>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default OurFeatureContent;
