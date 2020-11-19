import React from "react";
import { binaryValue, reverseString } from "./utils/helpers";

// binaryToDecimal
// hexadecimalToDecimal

const DecimalCalculation = ({ binary, hexadecimal }) => {
  binary = reverseString(binary);

  const binaryToDecimalCalc = (binary) => {
    return binary.split("").map((digit, index) => {
      let num = digit * Math.pow(2, index);
      return (
        <p key={index}>
          {digit} * 2 ^ {index}: {num}
        </p>
      );
    });
  };

  const hexadecimalToDecimalCalc = (hexadecimal) => {
    let hexaArray = reverseString(hexadecimal)
      .split("")
      .map((alpha) => {
        return isNaN(alpha) ? binaryValue(alpha) : parseInt(alpha);
      });

    return hexaArray.map((digit, index) => {
      let sum = digit * Math.pow(16, index);
      return (
        <p>
          {digit} * 16 ^ {index}: {sum}
        </p>
      );
    });
  };

  return (
    <div className="test">
      <div>
        <h1>Calculation</h1>
      </div>
    </div>
  );
};

export default DecimalCalculation;
