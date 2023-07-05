import React, { useState } from "react";
import { Tabs } from "antd";
import LoginForm from "./LoginForm";
import RegisterForm from "../Register/RegisterForm";
import loginimage from "../../images/Login/loginform_img.png";
import regiimage from "../../images/Registration/registrationform.png";

const LoginTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const getImageSrc = () => {
    if (activeTab === "1") {
      return loginimage; // Image source for the login tab
    } else if (activeTab === "2") {
      return regiimage; // Image source for the register tab
    }
    return ""; // Default image source
  };

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: "Login",
      children: <LoginForm />,
    },
    {
      key: "2",
      label: "Register",
      children: <RegisterForm />,
    },
  ];

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="loginimagepart">
          <img src={getImageSrc()} alt="login" />

          <div className="logintext">
            <h1>Lorem Ipsum is simply</h1>
            <h2>Lorem Ipsum is simply</h2>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="tabs">
          <span className="subtitle">Welcome to lorem..!</span>
          <div className="formtabs">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              {items.map((item) => (
                <Tabs.TabPane key={item.key} tab={item.label}>
                  {item.children}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTabs;
