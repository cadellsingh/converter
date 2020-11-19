import "./App.css";
import React, { useState } from "react";
import DecimalCalculation from "./DecimalCalculation";
import NumberSystemRow from "./NumberSystemRow";
import { decimalToBinary } from "./utils/decimalToBinary";
import { decimalToHexadecimal } from "./utils/decimalToHexadecimal";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";
import { hexadecimalToDecimal } from "./utils/hexadecimalToDecimal";
import { hexadecimalToBinary } from "./utils/hexadecimalToBinary";
import CalculationRow from "./CalculationRow";

const App = () => {
  const [input, setInput] = useState({
    decimal: "",
    binary: "",
    hexadecimal: "",
  });

  const [clickedOn, setClickedOn] = useState({
    decimal: false,
    binary: false,
    hexadecimal: false,
  });

  // const [binaryClickedOn, setBinaryClickedOn] = useState(false);
  // const [decimalClickedO, setDecimalClickedOn] = useState(false);
  // const [hexaClickedOn, setHexaClickedOn] = useState(false);

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
      [name]: !clickedOn,
    });
  };

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

  return (
    <div>
      <NumberSystemRow
        input={input}
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />

      <CalculationRow input={input} />
    </div>
  );
};

export default App;
