import React from "react";
import DecimalCalculation from "./DecimalCalculation";
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";

const Calculations = ({ showStepsFor, displaySteps, input }) => {
  // returns true if no input has been clicked on
  const hideCalculation = Object.values(displaySteps).every((value) => !value);

  // displays appropriate calculation
  const displayCalculation = () => {
    let calculation;

    for (const [key, value] of Object.entries(displaySteps)) {
      if (!value) {
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

  return <div>{!hideCalculation && displayCalculation()}</div>;
};

export default Calculations;
