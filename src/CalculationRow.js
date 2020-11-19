import React from "react";
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";
import DecimalCalculation from "./DecimalCalculation";

// may have to switch up certain methods
// for example binaryCalculation might have decimalToBinary & hexadecimalToBinary
// same for the other methods
// gonna have to pass two number systems to each calculation component

const CalculationRow = ({ input }) => {
  const { decimal, hexadecimal, binary } = input;

  return (
    <div className="container">
      <BinaryCalculation binary={binary} />
      <HexadecimalCalculation hexadecimal={hexadecimal} />
      <DecimalCalculation decimal={decimal} />
    </div>
  );
};

export default CalculationRow;
