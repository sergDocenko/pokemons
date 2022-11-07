import React, { useState } from "react";
import "./input.scss"

const Input = (props) => {
  const { value, onChange, placeholder } = props;
  const [state, setState] = useState(value ?? "");
  function handleChange(event) {
   
    setState(event.target.value);
   if (onChange) onChange(event);
  }
  return <input value={state} onChange={handleChange} placeholder={placeholder??""} />;
};

export default Input;
