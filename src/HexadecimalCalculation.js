import React from "react";
import { binaryValue } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";
import { reverseString } from "./utils/helpers";

const HexadecimalCalculation = ({ hexadecimal }) => {
  const hexadecimalToBinaryCalc = (hexadecimal) => {
    return hexadecimal.split("").map((alpha) => {
      let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
      let binary = decimalToBinary(hex);

      return (
        <p>
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
        <p>
          {digit} * 16 ^ {index}: {sum}
        </p>
      );
    });
  };

  return (
    <div className="test">
      <div>
        <h1>hexadecimal to binary calc</h1>
        {/*{hexadecimalToBinaryCalc(hexadecimal)}*/}
      </div>
      {/*<div className="calculation">*/}
      {/*  <h1>hexadecimal to decimal calc</h1>*/}
      {/*  {hexadecimalToDecimalCalc(hexadecimal)}*/}
      {/*</div>*/}
    </div>
  );
};

export default HexadecimalCalculation;
