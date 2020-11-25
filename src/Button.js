import React from "react";

const Button = ({ text, clickedOn, handleOnButtonClick }) => {
  const displayButton = () => {
    return (
      !clickedOn && (
        <button name={text} onClick={handleOnButtonClick}>
          Show Steps
        </button>
      )
    );
  };

  return <div>{displayButton()}</div>;
};

export default Button;
