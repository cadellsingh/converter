import React from "react";
import DecimalToBinaryCalculation from "./DecimalToBinaryCalculation";
import DecimalToHexadecimalCalculation from "./DecimalToHexadecimalCalculation";
import { AnimateOnChange } from "react-animation";

const DecimalCalculation = ({ decimal, showStepsFor }) => {
  let showAppropriateCalculation;

  if (showStepsFor === "binary") {
    showAppropriateCalculation = (
      <DecimalToBinaryCalculation decimal={decimal} />
    );
  } else if (showStepsFor === "hexadecimal") {
    showAppropriateCalculation = (
      <DecimalToHexadecimalCalculation decimal={decimal} />
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

export default DecimalCalculation;
