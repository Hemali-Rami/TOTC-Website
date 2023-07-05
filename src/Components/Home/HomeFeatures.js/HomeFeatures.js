import React from "react";
import Features from "./Features";
import Pulse from "react-reveal/Pulse";
const HomeFeatures = () => {
  return (
    <div className="featureswrap">
      <div className="container">
        <div className="featurepart">
          <div className="sectionmaininfo">
            <Pulse>
              <h3 className="color_head">
                All-In-One <span>Cloud Software.</span>
              </h3>
            </Pulse>
            <Pulse>
              <p>
                TOTC is one powerful online software suite that combines all the
                tools needed to run a successful school or office.
              </p>
            </Pulse>
          </div>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
