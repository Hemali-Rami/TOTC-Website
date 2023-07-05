import React from "react";
import testiimg from "../../../images/Home/Hometestimonial/testmonial_img.png";
import ratingstar from "../../../images/Home/Hometestimonial/ratingstar.png";
import Link from "antd/es/typography/Link";
import Slider from "react-slick";
import { Slide } from "react-reveal";
const Hometestimonial = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonialwrap">
      <div className="container">
        <div className="testimonialpart">
          <div className="row">
            <div className="col-md-5">
              <Slide up>
                <div className="tetimonialcontent">
                  <div className="testimonialsubhead">
                    <h5>TESTIMONIAL</h5>
                  </div>
                  <h4 className="texttyping">What They Say?</h4>
                  <p>
                    TOTC has got more than 100k positive ratings from our users
                    around the world.
                  </p>
                  <p>
                    Some of the students and teachers were greatly helped by the
                    Skilline.
                  </p>
                  <p>Are you too? Please give your assessment</p>
                  <div className="tetimonialbtn">
                    <Link>
                      Write your assessment
                      <span>
                        <svg
                          width="26"
                          height="16"
                          viewBox="0 0 26 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
                            fill="#49BBBD"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="col-md-7 testimonial">
              <Slide down>
                <div className="testimonialrightmain">
                  <Slider {...settings}>
                    <div className="testimonialslider">
                      <div className="testimonialanimation">
                        <div className="testimonialimg">
                          <img src={testiimg} alt="testimonail" />
                        </div>
                        <div className="clientreviewmain">
                          <div className="clientreview">
                            <p>
                              "Thank you so much for your help. It's exactly
                              what I've been looking for. You won't regret it.
                              It really saves me time and effort. TOTC is
                              exactly what our business has been lacking."
                            </p>
                          </div>
                          <div className="aboutclientmain">
                            <div className="clientname">
                              <span>Gloria Rose</span>
                            </div>
                            <div className="clientreviewdetail">
                              <div className="reviewstar">
                                <ul>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                </ul>
                              </div>
                              <div className="reviewpost">
                                <p>12 reviews at Yelp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonialslider">
                      <div className="testimonialanimation">
                        <div className="testimonialimg">
                          <img src={testiimg} alt="testimonail" />
                        </div>
                        <div className="clientreviewmain">
                          <div className="clientreview">
                            <p>
                              "Thank you so much for your help. It's exactly
                              what I've been looking for. You won't regret it.
                              It really saves me time and effort. TOTC is
                              exactly what our business has been lacking."
                            </p>
                          </div>
                          <div className="aboutclientmain">
                            <div className="clientname">
                              <span>Gloria Rose</span>
                            </div>
                            <div className="clientreviewdetail">
                              <div className="reviewstar">
                                <ul>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                </ul>
                              </div>
                              <div className="reviewpost">
                                <p>12 reviews at Yelp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonialslider">
                      <div className="testimonialanimation">
                        <div className="testimonialimg">
                          <img src={testiimg} alt="testimonail" />
                        </div>
                        <div className="clientreviewmain">
                          <div className="clientreview">
                            <p>
                              "Thank you so much for your help. It's exactly
                              what I've been looking for. You won't regret it.
                              It really saves me time and effort. TOTC is
                              exactly what our business has been lacking."
                            </p>
                          </div>
                          <div className="aboutclientmain">
                            <div className="clientname">
                              <span>Gloria Rose</span>
                            </div>
                            <div className="clientreviewdetail">
                              <div className="reviewstar">
                                <ul>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                </ul>
                              </div>
                              <div className="reviewpost">
                                <p>12 reviews at Yelp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonialslider">
                      <div className="testimonialanimation">
                        <div className="testimonialimg">
                          <img src={testiimg} alt="testimonail" />
                        </div>
                        <div className="clientreviewmain">
                          <div className="clientreview">
                            <p>
                              "Thank you so much for your help. It's exactly
                              what I've been looking for. You won't regret it.
                              It really saves me time and effort. TOTC is
                              exactly what our business has been lacking."
                            </p>
                          </div>
                          <div className="aboutclientmain">
                            <div className="clientname">
                              <span>Gloria Rose</span>
                            </div>
                            <div className="clientreviewdetail">
                              <div className="reviewstar">
                                <ul>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                  <li>
                                    <img src={ratingstar} alt="rating" />
                                  </li>
                                </ul>
                              </div>
                              <div className="reviewpost">
                                <p>12 reviews at Yelp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometestimonial;
