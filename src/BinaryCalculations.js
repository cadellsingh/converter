import React from "react";
import { binaryValue } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";

// import validation method (maybe)
// could prob use onFocus to prop to know when to display calc
// put validation in each calculation method

const BinaryCalculation = ({ decimal, hexadecimal }) => {
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

  const decimalToBinaryCalc = (decimal) => {
    let bitNum = 0;
    let calculations = [];

    while (decimal > 0) {
      let quotient = Math.floor(decimal / 2);
      let remainder = decimal % 2;

      calculations.push(
        <div>
          <p>Division by 2: {decimal} / 2</p>
          <p>Quotient: {quotient}</p>
          <p>Remainder: {remainder}</p>
          <p>Bit Number: {bitNum}</p>
          <p>====</p>
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
        {decimalToBinaryCalc(decimal)}
      </div>
    </div>
  );
};

export default BinaryCalculation;
