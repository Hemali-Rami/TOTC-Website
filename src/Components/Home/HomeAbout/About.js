import React from "react";
import bannerplay from "../../../images/Home/HomeBanner/playicon.svg";
import aboutmainimg from "../../../images/Home/ProjectIntrosec/aboutmainbanner.png";
import Link from "antd/es/typography/Link";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div className="aboutmainpart">
      <div className="row">
        <div className="col-md-6">
          <Fade left>
            <div className="aboutmaincontent">
              <div className="aboutmainhead">
                <div className="headpatt"></div>
                <h3 className="color_head">
                  Everything you can do in a physical classroom,
                  <span>you can do with TOTC</span>
                </h3>
              </div>
              <div className="aboutmainpara">
                <div className="smallpatt"></div>
                <p>
                  TOTC’s school management software helps traditional and online
                  schools manage scheduling, attendance, payments and virtual
                  classrooms all in one secure cloud-based system.
                </p>
              </div>

              <Link className="learnmorelink">Learn more</Link>
            </div>
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade right>
            <Link>
              <div className="aboutmainimg">
                <img src={aboutmainimg} alt="about" />
                <span className="playicon">
                  <img src={bannerplay} alt="play" />
                </span>
              </div>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
