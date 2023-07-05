import React from "react";
import { Input, Button } from "antd";
import PasswordInput from "../common/PasswordInput";
const RegisterForm = () => {
  return (
    <div className="registerformmain loginformmain">
      <div className="maintext">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="registerform">
        <div className="commoninput">
          <label>Email Address</label>
          <Input placeholder="Enter your Email Address" />
        </div>
        <div className="commoninput">
          <label>Usrename</label>
          <Input placeholder="Enter your User name" />
        </div>
        <div className="commoninput password">
          <label>
            <PasswordInput />
          </label>
        </div>

        <div className="commonbtn mt-42 loginbtn d-flex justify-content-end">
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
