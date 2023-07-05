import React from "react";
import introone from "../../../images/Home/ProjectIntrosec/introimg.png";
import introtwo from "../../../images/Home/ProjectIntrosec/introimgtwo.png";
import Link from "antd/es/typography/Link";
import Fade from "react-reveal/Fade";
const HomeAbout = () => {
  const aboutdata = [
    {
      img: introone,
      name: `FOR INSTRUCTORS`,
      btnname: `Start a class today`,
     
    },
    {
      img: introtwo,
      name: `FOR STUDENTS`,
      btnname: `Enter access code`,
      
    },
  ];
  return (
    <div className="aboutboxmain">
      <div className="row">
        {aboutdata.map((adata, index) => {
          const { img, name, btnname } = adata;
          return (
            <div className="col-md-6">
              <Fade up>
                <div className="aboutbox" key={index}>
                  <img src={img} alt={name} />
                  <div className="aboutcontent">
                    <div className="contentmain">
                      <h5>{name}</h5>
                      <div className="whitetransparent">
                        <Link>{btnname}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeAbout;
