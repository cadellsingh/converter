import React from "react";
import { binaryValue, uid } from "./utils/helpers";
import { reverseString } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";

// hexaToDeci
// hexaToBinary

const HexadecimalCalculation = ({ hexadecimal }) => {
  const hexadecimalToBinaryCalc = (hexadecimal) => {
    return hexadecimal.split("").map((alpha) => {
      let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
      let binary = decimalToBinary(hex);

      return (
        <p key={uid()}>
          {alpha}: {binary}
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
        <p key={uid()}>
          {digit} * 16 ^ {index}: {sum}
        </p>
      );
    });
  };

  return (
    <div className="calculation-container">
      <div>
        <h3>hexa to deci</h3>
        {hexadecimalToDecimalCalc(hexadecimal)}
      </div>
      <div>
        <h3>hexa to binary</h3>
        {hexadecimalToBinaryCalc(hexadecimal)}
      </div>
    </div>
  );
};

export default HexadecimalCalculation;
