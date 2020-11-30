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
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";

const calculationButtons = {
  decimal: false,
  binary: false,
  hexadecimal: false,
};

const buttonReducer = (state, action) => {
  showCalculationButton(state, true);

  let value = action.value;

  switch (action.type) {
    case "decimal":
      !decimalValidation(value) && showCalculationButton(state, false);
      return { ...state, decimal: false };
    case "binary":
      !binaryValidation(value) && showCalculationButton(state, false);
      return { ...state, binary: false };
    case "hexadecimal":
      !hexadecimalValidation(value) && showCalculationButton(state, false);
      return { ...state, hexadecimal: false };
    default:
      throw new Error();
  }
};

// false => invalid input was entered and should hide the "show steps" button
const showCalculationButton = (state, bool) => {
  Object.keys(state).forEach((key) => (state[key] = bool));
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

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();

    dispatchConversion({ type: name, value: value });

    dispatchButtons({ type: name, value: value });

    setShowStepsFor("");
  };

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
