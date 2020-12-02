import React from "react";
import BinaryToDecimalCalculation from "./BinaryToDecimalCalculation";
import BinaryToHexadecimalCalculation from "./BinaryToHexadecimalCalculation";
import { AnimateOnChange } from "react-animation";

const BinaryCalculation = ({ binary, showStepsFor }) => {
  let showAppropriateCalculation;

  if (showStepsFor === "decimal") {
    showAppropriateCalculation = <BinaryToDecimalCalculation binary={binary} />;
  } else if (showStepsFor === "hexadecimal") {
    showAppropriateCalculation = (
      <BinaryToHexadecimalCalculation binary={binary} />
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

export default BinaryCalculation;
