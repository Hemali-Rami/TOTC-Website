import React from "react";
import LoginTabs from "../Components/Login/LoginTabs";

const Login = () => {
  return (
    <div className="loginwrapper">
      <div className="container-fluid">
        <div className="loginpart">
          <LoginTabs />
        </div>
      </div>
    </div>
  );
};

export default Login;
