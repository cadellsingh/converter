import React from "react";
import { binaryLetter } from "./utils/helpers";

const DecimalCalculation = ({ decimal }) => {
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
        <h1>decimal to binary Calc</h1>
        {/*{decimalToBinaryCalc(decimal)}*/}
      </div>
      {/*<div className="calculation">*/}
      {/*  <h1>decimal to hexadecimal Calc</h1>*/}
      {/*  {decimalToHexadecimalCalc(decimal)}*/}
      {/*</div>*/}
    </div>
  );
};

export default DecimalCalculation;
