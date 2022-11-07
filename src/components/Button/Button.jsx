import React from 'react';
import clsx from 'clsx';
import "./button.scss"

const Button = (props) => {
const {children, onClick, className}=props;
const styles=clsx("button", className);
  return (
    <button onClick={onClick} className={styles}>
{children}
    </button>
  )
}

export default Button
