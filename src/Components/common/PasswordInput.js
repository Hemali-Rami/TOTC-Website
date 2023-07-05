import { Input } from "antd";
import { useState } from "react";
const PasswordInput = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="passwordfield">
      <label>Password</label>
      <Input.Password
        placeholder="Enter your Password"
        onChange={toggleVisibility}
      />
    </div>
  );
};

export default PasswordInput;
