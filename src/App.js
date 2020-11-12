import "./App.css";
import React, { useState } from "react";
import NumberSystem from "./NumberSystem";
import { decimalToBinary } from "./utils/decimalToBinary";
import { decimalToHexadecimal } from "./utils/decimalToHexadecimal";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";
import { hexadecimalToBinary } from "./utils/hexadecimalToBinary";
import { hexadecimalToDecimal } from "./utils/hexadecimalToDecimal";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";

const App = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();

    name === "decimal" && decimalConversion(value);
    name === "binary" && binaryConversion(value);
    name === "hexadecimal" && hexadecimalConversion(value);
  };

  const decimalConversion = (decimal) => {
    setDecimal(decimal);
    setBinary(decimalToBinary(decimal));
    setHexadecimal(decimalToHexadecimal(decimal));
  };

  const binaryConversion = (binary) => {
    setBinary(binary);
    setDecimal(binaryToDecimal(binary));
    setHexadecimal(binaryToHexadecimal(binary));
  };

  const hexadecimalConversion = (hexadecimal) => {
    setHexadecimal(hexadecimal);
    setDecimal(hexadecimalToDecimal(hexadecimal));
    setBinary(hexadecimalToBinary(hexadecimal));
  };

  return (
    <div>
      <form>
        <NumberSystem
          input={decimal}
          text="decimal"
          handleOnChange={handleOnChange}
          valid={decimalValidation(decimal)}
        />

        <NumberSystem
          input={binary}
          text="binary"
          handleOnChange={handleOnChange}
          valid={binaryValidation(binary)}
        />

        <NumberSystem
          input={hexadecimal}
          text="hexadecimal"
          handleOnChange={handleOnChange}
          valid={hexadecimalValidation(hexadecimal)}
        />
      </form>
    </div>
  );
};

export default App;
