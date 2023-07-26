import React from "react";
import "../styles/Button.css";

export const Button = ({ text, isButtonClick, handleClick }) => {
  return (
    <button
      className={isButtonClick ? "button-click" : "button-reset"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
