import React from "react";

const Button = ({ className, onClick, title }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
