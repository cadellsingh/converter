import React from "react";
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";
import DecimalCalculation from "./DecimalCalculation";

const CalculationRow = ({ input }) => {
  // only display 1 of the three based on whats being clicked on
  // so if decimal is being inputted display decimal calculation
  // decimal calculation will have decimal to binary & decimal to hexadecimal
  // might have to change back the calculation methods
  //

  return (
    // <DecimalCalculation decimal={input.decimal} />
    <BinaryCalculation binary={input.binary} />
    // <HexadecimalCalculation hexadecimal={input.hexadecimal} />
  );
};

export default CalculationRow;
