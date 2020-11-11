import React from "react";
import { decimalValidation } from "./utils/validation";

const NumberSystem = ({ input, valid, text, handleOnChange }) => {
  // console.log(decimalValidation(input));

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // if input is an empty string use that as a
  // boolean value to disable form input

  // prob move validation over here
  // send input and destructure object to get name -> decimal / binary / hexa
  // ^ it prob wont validate each letter

  return (
    <label style={{ color: valid ? "black" : "red" }}>
      {capitalize(text)}
      <input
        type="text"
        name={text}
        value={input}
        // placeholder="test"
        onChange={handleOnChange}
      />
    </label>
  );
};

export default NumberSystem;
