import React from "react";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";

const NumberSystem = ({ input, text, handleOnChange }) => {
  const validation = (text) => {
    return {
      binary: binaryValidation(input),
      decimal: decimalValidation(input),
      hexadecimal: hexadecimalValidation(input),
    }[text];
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // if input is an empty string use that as a
  // boolean value to disable form input

  return (
    <label style={{ color: validation(text) ? "black" : "red" }}>
      {capitalize(text)}
      <input
        type="text"
        name={text}
        value={input}
        // placeholder="test"
        onChange={handleOnChange}
        // disabled={input === ""}
      />
    </label>
  );
};

export default NumberSystem;
