import React from "react";
import inputCSS from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${inputCSS.control} ${
        props.checkValid === false ? inputCSS.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
