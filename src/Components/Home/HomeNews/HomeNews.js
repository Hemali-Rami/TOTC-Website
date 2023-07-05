import React from "react";
import mainnewsimg from "../../../images/Home/HomeNews/mainnewsimg.png";
import newsone from "../../../images/Home/HomeNews/newsone.png";
import newstwo from "../../../images/Home/HomeNews/newstwo.png";
import newsthree from "../../../images/Home/HomeNews/newsthree.png";
import Link from "antd/es/typography/Link";
import { Slide } from "react-reveal";
const HomeNews = () => {
  return (
    <div className="homenewswrap">
      <div className="container">
        <Slide up>
          <div className="homenewspart">
            <h4>Lastest News and Resources</h4>
            <p className="introtext">
              See the developments that have occurred to TOTC in the world
            </p>
            <div className="articlewrap">
              <div className="row">
                <div className="col-md-5">
                  <div className="mainnewsbox">
                    <div className="newsimage">
                      <img src={mainnewsimg} alt="news" />
                    </div>
                    <div className="newsdescmain">
                      <div className="newscategory">
                        <span>NEWS</span>
                      </div>
                      <h5>
                        Class adds $30 million to its balance sheet for a
                        Zoom-friendly edtech solution
                      </h5>
                      <p>
                        Class, launched less than a year ago by Blackboard
                        co-founder Michael Chasen, integrates exclusively...
                      </p>
                      <div className="readmorelink">
                        <Link className="learnmorelink">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="articlesmain">
                    <div className="mainnewsbox">
                      <div className="articleimg">
                        <div className="newsimage">
                          <img src={newsone} alt="news" />
                          <div className="newscategory">
                            <span>PRESS RELEASE</span>
                          </div>
                        </div>
                      </div>
                      <div className="newsdescmain">
                        <h5>
                          Class Technologies Inc. Closes $30 Million Series A
                          Financing to Meet High Demand
                        </h5>
                        <p>
                          Class Technologies Inc., the company that created
                          Class,...
                        </p>
                      </div>
                    </div>
                    <div className="mainnewsbox">
                      <div className="articleimg">
                        <div className="newsimage">
                          <img src={newstwo} alt="news" />
                          <div className="newscategory">
                            <span>NEWS</span>
                          </div>
                        </div>
                      </div>
                      <div className="newsdescmain">
                        <h5>
                          Zoom’s earliest investors are betting millions on a
                          better Zoom for schools
                        </h5>
                        <p>
                          Zoom was never created to be a consumer product.
                          Nonetheless, the...
                        </p>
                      </div>
                    </div>
                    <div className="mainnewsbox">
                      <div className="articleimg">
                        <div className="newsimage">
                          <img src={newsthree} alt="news" />
                          <div className="newscategory">
                            <span>NEWS</span>
                          </div>
                        </div>
                      </div>
                      <div className="newsdescmain">
                        <h5>
                          Former Blackboard CEO Raises $16M to Bring LMS
                          Features to Zoom Classrooms
                        </h5>
                        <p>
                          This year, investors have reaped big financial returns
                          from betting on Zoom...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HomeNews;
