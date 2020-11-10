import React from "react";

const NumberSystems = ({ input, valid, text, handleOnChange }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <label>
      {capitalize(text)}
      <input type="text" name={text} value={input} onChange={handleOnChange} />
    </label>
  );
};

export default NumberSystems;
