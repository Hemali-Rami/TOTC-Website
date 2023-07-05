import React from "react";
import fea_one from "../../../images/Home/OurFeature/feature_one.png";
import fea_two from "../../../images/Home/OurFeature/feature_two.png";
import fea_three from "../../../images/Home/OurFeature/feature_three.png";
import fea_four from "../../../images/Home/OurFeature/feature_four.png";
import fea_five from "../../../images/Home/OurFeature/feature_five.png";
import inter_one from "../../../images/Home/OurFeature/interface_one.png";
import inter_two from "../../../images/Home/OurFeature/interface_two.png";
import inter_three from "../../../images/Home/OurFeature/interface_three.svg";
import Link from "antd/es/typography/Link";

const Features = () => {
  const feature = [
    {
      image: fea_one,
      title: (
        <>
          A <span>user interface </span>designed for the classroom
        </>
      ),
      para: [
        {
          paraimage: inter_one,
          paragraph: `Teachers don’t get lost in the grid view and have a dedicated Podium space.`,
        },
        {
          paraimage: inter_two,
          paragraph: `TA’s and presenters can be moved to the front of the class.`,
        },
        {
          paraimage: inter_three,
          paragraph: `Teachers can easily see all students and class data at one time.`,
        },
      ],
    },
    {
      image: fea_two,
      title: (
        <>
          <span>Tools</span> For Teachers And Learners
        </>
      ),
      para: `Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.`,
    },
    {
      image: fea_three,
      title: (
        <>
          Assessments,
          <br /> <span>Quizzes</span>, Tests
        </>
      ),
      para: `Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.`,
    },
    {
      image: fea_four,
      title: (
        <>
          <span>Class Management</span>
          <br /> Tools for Educators
        </>
      ),
      para: `Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
`,
    },
    {
      image: fea_five,
      title: (
        <>
          <span>One-on-One</span>
          <br /> Discussions
        </>
      ),
      para: `Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.`,
    },
  ];
  return (
    <div className="featureswrap">
      <div className="container">
        <div className="featurespart">
          <div className="featuresboxwrap">
            {feature.map((fdata, index) => {
              const { image, title, para } = fdata;
              return (
                <div
                  className={`row ${
                    index % 2 === 0 ? "oddclass" : "evenclass"
                  }`}
                  key={index}
                >
                  <div className="col-md-6">
                    <div className="featureimage">
                      <img src={image} alt={title} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="featurecontentmain">
                      <h4>{title}</h4>
                      <div className="featurecontent">
                        {Array.isArray(para) ? (
                          para.map((paraItem, paraIndex) => (
                            <ul>
                              <li
                                className="d-flex align-items-center"
                                key={paraIndex}
                              >
                                <div className="paraicon">
                                  <img
                                    src={paraItem.paraimage}
                                    alt={`Paragraph ${paraIndex + 1}`}
                                  />
                                </div>
                                <p>{paraItem.paragraph}</p>
                              </li>
                            </ul>
                          ))
                        ) : (
                          <p>{para}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bordergreenbtn text-center">
            <Link>See more features</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
