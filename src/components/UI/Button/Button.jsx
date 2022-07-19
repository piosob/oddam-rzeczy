import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  const handleClick = () => props.onClick(props.step);

  return (
    <button
      className={`${classes.button} ${props.className ? props.className : ""}`}
      type={props.type || "button"}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
