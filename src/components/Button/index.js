//react
import React from "react";
//styles
import "./index.css";

const Button = ({ text, action }) => {
  return (
    <div onClick={action} className="button">
      {text}
    </div>
  );
};

export default Button;
