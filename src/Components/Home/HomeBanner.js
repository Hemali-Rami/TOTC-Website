import React from "react";
import Link from "antd/es/typography/Link";
import bannermainimg from "../../images/Home/HomeBanner/bannermainimg.png";
import bannerplay from "../../images/Home/HomeBanner/playicon.svg";
import assiststudentico from "../../images/Home/HomeBanner/bannercal.svg";
import bannergraphico from "../../images/Home/HomeBanner/bannergraph.svg";
import banneremailico from "../../images/Home/HomeBanner/bannermail.svg";
import Fade from "react-reveal/Fade";
const HomeBanner = () => {
  return (
    <div className="bannerwrap">
      <div className="container">
        <div className="bannerpart">
          <div className="row">
            <div className="col-md-5">
              <Fade left delay={100}>
                <h2>
                  <span>Studying</span> Online is now much easier
                </h2>
              </Fade>
              <Fade left delay={200}>
                <p>
                  TOTC is an interesting platform that will teach you in more an
                  interactive way
                </p>
              </Fade>
              <Fade left delay={220}>
                <div className="bannerbtns">
                  <div className="joinbtn">
                    <Link>Join for free</Link>
                  </div>
                  <div className="howitworks">
                    <Link>
                      <span className="playicon">
                        <img src={bannerplay} alt="play" />
                      </span>
                      Watch how it works
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-7">
              <div className="banerimgmain">
                <Fade left delay={1000}>
                  <div className="bannerassiststudent">
                    <div className="imagesec">
                      <img src={assiststudentico} alt="assisted student" />
                    </div>
                    <div className="assiststudent_info">
                      <span>250k</span>
                      <p>Assisted Student</p>
                    </div>
                  </div>
                </Fade>
                <Fade left delay={1500}>
                  <div className="addmisionmain">
                    <div className="has_arrow addmissiondone d-flex align-items-center">
                      <div className="imagesec">
                        <img src={banneremailico} alt="admission complete" />
                      </div>

                      <div className="assiststudent_info">
                        <span>Congratulations</span>
                        <p>Your admission completed</p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade left delay={1600}></Fade>
                <div className="bannergraph">
                  <img src={bannergraphico} alt="bannergraph" />
                </div>
                <Fade up delay={1400}>
                  <img src={bannermainimg} alt="Home Banner" />
                </Fade>
                <Fade right delay={1700}>
                  <div className="userexpmain">
                    <div className="d-flex align-items-center userexp">
                      <div className="imagesec">
                        <span className="greendot"></span>
                      </div>
                      <div className="assiststudent_info">
                        <span>User Experience Class</span>
                        <p>Today at 12.00 PM</p>
                        <div className="joinnowbtn pinkbtn">
                          <Link>Join Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
