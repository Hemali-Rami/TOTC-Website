import React from "react";
import { Input, Button, Checkbox } from "antd";
import PasswordInput from "../common/PasswordInput";
import Link from "antd/es/typography/Link";
const LoginForm = () => {
  const onCheckChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="loginformmain">
      <div className="loginmaintext">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="loginform">
        <div className="commoninput">
          <label>Usrename</label>
          <Input placeholder="Enter your User name" />
        </div>
        <div className="commoninput password">
          <label>
            <PasswordInput />
          </label>
        </div>
        <div className="loginlinks d-flex align-items-center justify-content-between mx-22">
          <div className="formcheck">
            <Checkbox onCheckChange={onCheckChange}>Rememeber me</Checkbox>
          </div>
          <div className="forgotpassword">
            <Link>Forgot Password ?</Link>
          </div>
        </div>
        <div className="commonbtn mt-42 loginbtn d-flex justify-content-end">
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
