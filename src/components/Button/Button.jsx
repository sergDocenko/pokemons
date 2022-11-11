import React from "react";
import clsx from "clsx";
import "./button.scss";

const Button = (props) => {
  const { children, onClick, className, disabled } = props;
  const styles = clsx("button", className);
  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
