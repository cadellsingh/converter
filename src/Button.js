import React from "react";

const Button = ({ text, displaySteps, handleOnButtonClick }) => {
  const displayButton = () => {
    return (
      displaySteps && (
        <button name={text} onClick={handleOnButtonClick}>
          Show Steps
        </button>
      )
    );
  };

  return <div>{displayButton()}</div>;
};

export default Button;
