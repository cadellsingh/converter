import React from "react";
import HexadecimalToDecimalCalculation from "./HexadecimalToDecimalCalculation";
import HexadecimalToBinaryCalculation from "./HexadecimalToBinaryCalculation";
import { AnimateOnChange } from "react-animation";

const HexadecimalCalculation = ({ hexadecimal, showStepsFor }) => {
  let showAppropriateCalculation;

  if (showStepsFor === "decimal") {
    showAppropriateCalculation = (
      <HexadecimalToDecimalCalculation hexadecimal={hexadecimal} />
    );
  } else if (showStepsFor === "binary") {
    showAppropriateCalculation = (
      <HexadecimalToBinaryCalculation hexadecimal={hexadecimal} />
    );
  }

  return (
    <AnimateOnChange
      animation="bounce"
      style={{ width: "100%" }}
      duration={500}
    >
      {showAppropriateCalculation}
    </AnimateOnChange>
  );
};

export default HexadecimalCalculation;
