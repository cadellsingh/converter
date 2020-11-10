import "./App.css";
import React, { useState } from "react";
import {
  decimalValidation,
  hexadecimalValidation,
  binaryValidation,
} from "./utils/validation";

const App = () => {
  const [input, setInput] = useState({
    binary: "",
    hexadecimal: "",
    decimal: "",
  });

  // prob same thing as above
  const [valid, setValid] = useState(true);

  // do validation in here - well maybe
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [name]: value,
    });

    // prob switch statement
    if (name === "hexadecimal") {
      setValid(hexadecimalValidation(value));
    } else if (name === "decimal") {
      setValid(decimalValidation(value));
    } else if (name === "binary") {
      setValid(binaryValidation(value));
    }
  };

  return (
    <div>
      <form>
        {/* can extract into own component*/}
        <label style={{ color: valid ? "black" : "red" }}>
          Decimal
          <input
            type="text"
            name="decimal"
            value={input.decimal}
            onChange={handleOnChange}
          />
        </label>

        <label>
          Hexadecimal
          <input
            type="text"
            name="hexadecimal"
            value={input.hexadecimal}
            onChange={handleOnChange}
          />
        </label>

        {/*<label>*/}
        {/*  Binary*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    name="binary"*/}
        {/*    value={inputValue}*/}
        {/*    onChange={handleOnChange}*/}
        {/*  />*/}
        {/*</label>*/}
      </form>
    </div>
  );
};

export default App;
