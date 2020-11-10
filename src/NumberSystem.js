import React from "react";

const NumberSystem = ({ input, valid, text, handleOnChange }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <label style={{ color: valid ? "black" : "red" }}>
      {capitalize(text)}
      <input
        type="text"
        name={text}
        value={input}
        placeholder="test"
        onChange={handleOnChange}
      />
    </label>
  );
};

export default NumberSystem;
