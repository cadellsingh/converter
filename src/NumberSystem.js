import React from "react";

const NumberSystem = ({ input, text, handleOnChange, valid }) => {
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
        onChange={handleOnChange}
        // disabled={!valid}
      />
    </label>
  );
};

export default NumberSystem;
