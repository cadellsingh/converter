import React from "react";
import DecimalCalculation from "./DecimalCalculation";
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";

const Calculations = ({ showStepsFor, clickedOn, input }) => {
  const displayCalculation = () => {
    let calculation;

    for (const [key, value] of Object.entries(clickedOn)) {
      if (value) {
        calculation = {
          decimal: (
            <DecimalCalculation
              decimal={input.decimal}
              showStepsFor={showStepsFor}
            />
          ),
          binary: (
            <BinaryCalculation
              binary={input.binary}
              showStepsFor={showStepsFor}
            />
          ),
          hexadecimal: (
            <HexadecimalCalculation
              hexadecimal={input.hexadecimal}
              showStepsFor={showStepsFor}
            />
          ),
        }[key];
      }
    }

    return calculation;
  };

  return <div>{displayCalculation()}</div>;
};

export default Calculations;
