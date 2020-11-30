import "./App.css";
import React, { useState, useReducer } from "react";
import NumberSystemRow from "./NumberSystemRow";
import { decimalToBinary } from "./utils/decimalToBinary";
import { decimalToHexadecimal } from "./utils/decimalToHexadecimal";
import { binaryToDecimal } from "./utils/binaryToDecimal";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";
import { hexadecimalToDecimal } from "./utils/hexadecimalToDecimal";
import { hexadecimalToBinary } from "./utils/hexadecimalToBinary";
import Calculations from "./Calculations";
import MyContext from "./MyContext";

const calculationButtons = {
  decimal: false,
  binary: false,
  hexadecimal: false,
};

const buttonReducer = (state, action) => {
  Object.keys(state).forEach((key) => (state[key] = true));

  switch (action.type) {
    case "decimal":
      return { ...state, decimal: false };
    case "binary":
      return { ...state, binary: false };
    case "hexadecimal":
      return { ...state, hexadecimal: false };
    default:
      throw new Error();
  }
};

const numberSystems = {
  decimal: "",
  binary: "",
  hexadecimal: "",
};

const conversion = (state, action) => {
  let value = action.value;

  switch (action.type) {
    case "decimal":
      return {
        ...state,
        decimal: value,
        binary: decimalToBinary(value),
        hexadecimal: decimalToHexadecimal(value),
      };
    case "binary":
      return {
        ...state,
        binary: value,
        decimal: binaryToDecimal(value),
        hexadecimal: binaryToHexadecimal(value),
      };
    case "hexadecimal":
      return {
        ...state,
        hexadecimal: value,
        decimal: hexadecimalToDecimal(value),
        binary: hexadecimalToBinary(value),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [input, dispatchConversion] = useReducer(conversion, numberSystems);

  const [displayShowStepsButton, dispatchButtons] = useReducer(
    buttonReducer,
    calculationButtons
  );

  const [showStepsFor, setShowStepsFor] = useState("");

  // prob could pass the value into dispatchButtons
  // if invalid, dont show buttons
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();

    dispatchConversion({ type: name, value: value });

    dispatchButtons({ type: name });
  };

  // const handleOnClick = (event) => {
  //   const name = event.target.name;
  //
  //   dispatchButtons({ type: name });
  //
  //   setShowStepsFor("");
  // };

  const handleOnButtonClick = (event) => {
    const name = event.target.name;

    setShowStepsFor(name);
  };

  return (
    <div>
      <MyContext.Provider
        value={{
          input: input,
          handleOnChange: handleOnChange,
          // handleOnClick: handleOnClick,
          handleOnButtonClick: handleOnButtonClick,
          displaySteps: displayShowStepsButton,
        }}
      >
        <NumberSystemRow />
        <Calculations showStepsFor={showStepsFor} />
      </MyContext.Provider>
    </div>
  );
};

export default App;
