import React from "react";
import { reverseString } from "./utils/helpers";
import { binaryLetter } from "./utils/helpers";
import { splitString } from "./utils/helpers";

// import validation method (maybe)
// could prob use onFocus to prop to know when to display calc
// put validation in each calculation method

const BinaryCalculation = ({ binary }) => {
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

  return (
    <div className="test">
      <div>
        <h1>binary To dec Calculation</h1>
        {/*{binaryToDecimalCalc(binary)}*/}
      </div>

      {/*<div className="calculation">*/}
      {/*  <h1>binary to hexa Calculation</h1>*/}
      {/*  {binaryToHexaCalc(binary)}*/}
      {/*</div>*/}
    </div>
  );
};

export default BinaryCalculation;
