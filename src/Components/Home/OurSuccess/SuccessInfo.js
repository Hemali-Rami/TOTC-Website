import React from "react";
import { Zoom } from "react-reveal";
const SuccessInfo = () => {
  const successmain = [
    {
      id: 1,
      successnum: `15K+`,
      featurename: `Students`,
    },
    {
      id: 2,
      successnum: `75 %`,
      featurename: `Total success`,
    },
    {
      id: 3,
      successnum: `35`,
      featurename: `Main questions`,
    },
    {
      id: 4,
      successnum: `26`,
      featurename: `Chief experts`,
    },
    {
      id: 5,
      successnum: `16`,
      featurename: `Years of experience`,
    },
  ];

  return (
    <div className="successinfopart">
      <div className="row">
        {successmain.map((sdata) => {
          return (
            <Zoom>
              <div className="col" key={sdata.id}>
                <div className="maininfo">
                  <h6>{sdata.successnum}</h6>
                  <span>{sdata.featurename}</span>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default SuccessInfo;
