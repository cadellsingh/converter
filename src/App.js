import "./App.css";
import React, { useState } from "react";
import {
  decimalValidation,
  hexadecimalValidation,
  binaryValidation,
} from "./utils/validation";
import NumberSystem from "./NumberSystem";
import { decimalToBinary } from "./utils/decimalToBinary";
import { decimalToHexadecimal } from "./utils/decimalToHexadecimal";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";

const App = () => {
  const [input, setInput] = useState({
    binary: "",
    hexadecimal: "",
    decimal: "",
  });

  // move this to NumberSystems component
  const [binaryValid, setBinaryValid] = useState(true);
  const [decimalValid, setDecimalValid] = useState(true);
  const [hexaValid, setHexaValid] = useState(true);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [name]: value,
    });

    // name === "hexadecimal" && setHexaValid(hexadecimalValidation(value));
    // name === "decimal" && setDecimalValid(decimalValidation(value));
    // name === "binary" && setBinaryValid(binaryValidation(value));
  };

  const handleOnSubmit = (event) => {
    const { decimal, binary, hexadecimal } = input;

    decimal !== "" && decimalConversion(decimal);

    event.preventDefault();
  };

  const decimalConversion = (decimal) => {
    setInput({
      ...input,
      binary: decimalToBinary(decimal),
    });

    setInput({
      ...input,
      ["hexadecimal"]: decimalToHexadecimal(decimal),
    });
  };

  const binaryConversion = (binary) => {
    setInput({
      ...input,
      decimal: binaryToDecimal(binary),
    });

    setInput({
      ...input,
      ["hexadecimal"]: binaryToHexadecimal(binary),
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <NumberSystem
          input={input.decimal}
          valid={decimalValid}
          text="decimal"
          handleOnChange={handleOnChange}
        />

        <NumberSystem
          input={input.hexadecimal}
          valid={hexaValid}
          text="hexadecimal"
          handleOnChange={handleOnChange}
        />

        <NumberSystem
          input={input.binary}
          valid={binaryValid}
          text="binary"
          handleOnChange={handleOnChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
