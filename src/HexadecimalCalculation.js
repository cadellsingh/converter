import React from "react";
import { binaryLetter, splitString } from "./utils/helpers";
import { reverseString } from "./utils/helpers";

// decimalToHexadecimal
// binaryToHexadecimal

const HexadecimalCalculation = ({ binary, decimal }) => {
  binary = reverseString(binary);

  const binaryToHexaCalc = (binary) => {
    return splitString(binary).map((data, index) => {
      const binaryValues = [1, 2, 4, 8];
      let sum = 0;

      data.split("").forEach((digit, index) => {
        sum += digit === "1" && binaryValues[index];
      });

      let hexadecimal = sum <= 9 ? sum : binaryLetter(sum);

      return (
        <p key={index}>
          {data}: {hexadecimal}
        </p>
      );
    });
  };

  const decimalToHexadecimalCalc = (decimal) => {
    let bitNum = 0;
    let calculations = [];

    while (decimal > 0) {
      let quotient = Math.floor(decimal / 16);
      let remainder = decimal % 16;
      let remainderHex = remainder > 9 ? binaryLetter(remainder) : remainder;

      calculations.push(
        <div>
          <p>Division by 16: {decimal} / 16</p>
          <p>Quotient: {quotient}</p>
          <p>Remainder (decimal): {remainder}</p>
          <p>Remainder (hexadecimal): {remainderHex}</p>
          <p>Bit Number: {bitNum}</p>
          <p>===</p>
        </div>
      );

      bitNum++;
      decimal = quotient;
    }

    return calculations;
  };

  return (
    <div className="test">
      <div>
        <h1>Calculation</h1>
        {decimalToHexadecimalCalc(decimal)}
      </div>
    </div>
  );
};

export default HexadecimalCalculation;
