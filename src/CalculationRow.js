import React from "react";
import BinaryCalculation from "./BinaryCalculations";
import HexadecimalCalculation from "./HexadecimalCalculation";
import DecimalCalculation from "./DecimalCalculation";

const CalculationRow = ({ input }) => {
  const { decimal, hexadecimal, binary } = input;

  return (
    <div className="container">
      <DecimalCalculation binary={binary} hexadecimal={hexadecimal} />
      <BinaryCalculation decimal={decimal} hexadecimal={hexadecimal} />
      <HexadecimalCalculation decimal={decimal} binary={binary} />
    </div>
  );
};

export default CalculationRow;
