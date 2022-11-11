import React, { useState } from "react";
import "./input.scss";

const Input = (props) => {
  const { value, onChange, onBlur, placeholder } = props;
  const [state, setState] = useState(value ?? "");
  function handleChange(event) {
    setState(event.target.value);
    if (onChange) onChange(event);
  }
  return (
    <input
      value={state}
      onChange={handleChange}
      placeholder={placeholder ?? ""}
      onBlur={onBlur}
    />
  );
};

export default Input;
