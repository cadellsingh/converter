import React, { useContext } from "react";
import DecimalCalculation from "./DecimalCalculation/DecimalCalculation";
import BinaryCalculation from "./BinaryCalculation/BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation/HexadecimalCalculation";
import MyContext from "./MyContext";

const Calculations = ({ showStepsFor }) => {
  const { input, displaySteps } = useContext(MyContext);

  // returns true if no input has been clicked on
  const hideCalculation = Object.values(displaySteps).every((value) => !value);

  // gets appropriate calculation
  const getAppropriateCalculation = () => {
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

  return <div>{!hideCalculation && getAppropriateCalculation()}</div>;
};

export default Calculations;
