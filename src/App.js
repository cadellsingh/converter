import "./App.css";
import React, { useState } from "react";
import {
  decimalValidation,
  hexadecimalValidation,
  binaryValidation,
} from "./utils/validation";
import NumberSystem from "./NumberSystem";

const App = () => {
  const [input, setInput] = useState({
    binary: "",
    hexadecimal: "",
    decimal: "",
  });

  const [binaryValid, setBinaryValid] = useState(true);
  const [decimalValid, setDecimalValid] = useState(true);
  const [hexaValid, setHexaValid] = useState(true);

  const [disabled, setDisabled] = useState(true);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [name]: value,
    });

    name === "hexadecimal" && setHexaValid(hexadecimalValidation(value));
    name === "decimal" && setDecimalValid(decimalValidation(value));
    name === "binary" && setBinaryValid(binaryValidation(value));
  };

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default App;
