import "./App.css";
import React, { useState } from "react";
import NumberSystemRow from "./NumberSystemRow";
import { decimalToBinary } from "./utils/decimalToBinary";
import { decimalToHexadecimal } from "./utils/decimalToHexadecimal";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";
import { hexadecimalToDecimal } from "./utils/hexadecimalToDecimal";
import { hexadecimalToBinary } from "./utils/hexadecimalToBinary";
import DecimalCalculation from "./DecimalCalculation";
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";

const App = () => {
  const [input, setInput] = useState({
    decimal: "",
    binary: "",
    hexadecimal: "",
  });

  const [clickedOn, setClickedOn] = useState({
    decimal: true,
    binary: true,
    hexadecimal: true,
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();

    name === "decimal" && decimalConversion(value);
    name === "binary" && binaryConversion(value);
    name === "hexadecimal" && hexadecimalConversion(value);
  };

  const handleOnClick = (event) => {
    const name = event.target.name;

    setClickedOn({
      ...clickedOn,
      decimal: false,
      binary: false,
      hexadecimal: false,
      [name]: true,
    });
  };

  console.log(clickedOn);

  const decimalConversion = (decimal) => {
    setInput({
      ...input,
      decimal: decimal,
      binary: decimalToBinary(decimal),
      hexadecimal: decimalToHexadecimal(decimal),
    });
  };

  const binaryConversion = (binary) => {
    setInput({
      ...input,
      binary: binary,
      decimal: binaryToDecimal(binary),
      hexadecimal: binaryToHexadecimal(binary),
    });
  };

  const hexadecimalConversion = (hexadecimal) => {
    setInput({
      ...input,
      hexadecimal: hexadecimal,
      decimal: hexadecimalToDecimal(hexadecimal),
      binary: hexadecimalToBinary(hexadecimal),
    });
  };

  // if decimal is clicked on
  // show "show steps" for binary & hexadecimal

  return (
    <div>
      <NumberSystemRow
        input={input}
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
        clickedOn={clickedOn}
      />

      {/*<DecimalCalculation decimal={input.decimal} />*/}
      {/*<BinaryCalculation binary={input.binary} />*/}
      {/*<HexadecimalCalculation hexadecimal={input.hexadecimal} />*/}
    </div>
  );
};

export default App;
