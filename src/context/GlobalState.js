import { createContext, useReducer, useState } from "react";
import { ButtonReducer } from "./ButtonReducer";
import { NumberSystemReducer } from "./NumberSystemReducer";

const buttonState = {
  decimal: false,
  binary: false,
  hexadecimal: false,
};

const numberSystemState = {
  decimal: "",
  binary: "",
  hexadecimal: "",
};

// create context
export const GlobalContext = createContext();

// provider component
export const GlobalProvider = ({ children }) => {
  const [buttons, dispatch] = useReducer(ButtonReducer, buttonState);
  const [inputs, dispatchConversion] = useReducer(
    NumberSystemReducer,
    numberSystemState
  );
  const [showStepsFor, setShowStepsFor] = useState("");

  const displayAppropriateButton = (name, value) => {
    dispatch({
      type: name,
      value: value,
    });
  };

  const conversion = (name, value) => {
    dispatchConversion({
      type: name,
      value: value,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        setShowStepsFor: setShowStepsFor,
        showStepsFor: showStepsFor,
        buttonState: buttons,
        inputs: inputs,
        displayAppropriateButton,
        conversion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
