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
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";
import DecimalCalculation from "./DecimalCalculation";

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

      {/*could add a onfocus to see which is being focused*/}
      {/* if decimal is being focused then do decimal calculation and so forth*/}

      {/*<BinaryCalculation binary={binary} />*/}
      {/*<HexadecimalCalculation hexadecimal={hexadecimal} />*/}
      <DecimalCalculation decimal={decimal} />
    </div>
  );
};

export default App;
