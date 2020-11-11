import "./App.css";
import React, { useState } from "react";
import NumberSystem from "./NumberSystem";
import { decimalToBinary } from "./utils/decimalToBinary";
import { decimalToHexadecimal } from "./utils/decimalToHexadecimal";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";
import { hexadecimalToBinary } from "./utils/hexadecimalToBinary";
import { hexadecimalToDecimal } from "./utils/hexadecimalToDecimal";

const App = () => {
  const [input, setInput] = useState({
    binary: "",
    hexadecimal: "",
    decimal: "",
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    const { decimal, binary, hexadecimal } = input;

    // decimal !== "" && decimalConversion(decimal);
    // binary !== "" && binaryConversion(binary);
    // hexadecimal !== "" && hexadecimalConversion(hexadecimal);

    // decimalConversion(decimal);
    // binaryConversion(binary);
    // hexadecimalConversion(hexadecimal);

    event.preventDefault();
  };

  // could use onfocus event to change the values
  // take out the submit button

  const decimalConversion = (decimal) => {
    setInput({
      ...input,
      binary: decimalToBinary(decimal),
      hexadecimal: decimalToHexadecimal(decimal),
    });
  };

  const binaryConversion = (binary) => {
    setInput({
      ...input,
      decimal: binaryToDecimal(binary),
      hexadecimal: binaryToHexadecimal(binary),
    });
  };

  const hexadecimalConversion = (hexadecimal) => {
    setInput({
      ...input,
      binary: hexadecimalToBinary(hexadecimal),
      decimal: hexadecimalToDecimal(hexadecimal),
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <NumberSystem
          input={input.decimal}
          text="decimal"
          handleOnChange={handleOnChange}
        />

        <NumberSystem
          input={input.hexadecimal}
          text="hexadecimal"
          handleOnChange={handleOnChange}
        />

        <NumberSystem
          input={input.binary}
          text="binary"
          handleOnChange={handleOnChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
