import React from "react";
import invoiceicon from "../../../images/Home/HomeFeature/invoice.png";
import calendericon from "../../../images/Home/HomeFeature/feature_calendar.svg";
import groupuser from "../../../images/Home/HomeFeature/feature_user.svg";
import Slide from "react-reveal/Slide";
const Features = () => {
  const feature = [
    {
      img: invoiceicon,
      name: `Online Billing, Invoicing, & Contracts`,
      para: `Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts`,
      animation: "fade-left",
    },
    {
      img: calendericon,
      name: `Easy Scheduling & Attendance Tracking`,
      para: `Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance`,
      animation: "fade-up",
    },
    {
      img: groupuser,
      name: `Customer Tracking`,
      para: `Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization`,
      animation: "fade-right",
    },
  ];
  return (
    <div className="homefeaturespart">
      <div className="container">
        <div className="row">
          {feature.map((fdata, index) => {
            let colClass = "";

            if (index === 0) {
              colClass = "darkblue";
            } else if (index === 1) {
              colClass = "green";
            } else if (index === 2) {
              colClass = "blue";
            }
            console.log("features list", fdata);
            return (
              <div className={`col-md-4 ${colClass}`} key={index}>
                <Slide up>
                  <div className="featuresbox">
                    <div className="featureico">
                      <div className="featureimg">
                        <img src={fdata.img} alt={fdata.name} />
                      </div>
                    </div>

                    <div className="featurecontent">
                      <div className="featurecontentmain">
                        <div className="featurehead">
                          <h4>{fdata.name}</h4>
                        </div>
                        <div className="featuredesc">
                          <p>{fdata.para}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
