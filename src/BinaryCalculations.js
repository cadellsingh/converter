import React from "react";
import { binaryLetter, reverseString, splitString, uid } from "./utils/helpers";
import { binaryValidation } from "./utils/validation";

const BinaryCalculation = ({ binary }) => {
  const binaryToHexaCalc = (binary) => {
    if (!binaryValidation(binary) || binary === "") {
      return "";
    }

    return splitString(binary).map((data) => {
      const binaryValues = [1, 2, 4, 8];
      let sum = 0;

      reverseString(data)
        .split("")
        .forEach((digit, index) => {
          sum += digit === "1" && binaryValues[index];
        });

      let hexadecimal = sum <= 9 ? sum : binaryLetter(sum);

      return (
        <p key={uid()}>
          {data} : {hexadecimal}
        </p>
      );
    });
  };

  const binaryToDecimalCalc = (binary) => {
    if (!binaryValidation(binary)) {
      return "";
    }

    return reverseString(binary)
      .split("")
      .map((digit, index) => {
        let num = digit * Math.pow(2, index);
        return (
          <p key={uid()}>
            {digit} * 2 ^ {index}: {num}
          </p>
        );
      });
  };

  // could make another component
  //  like calculation and then i'll pass whatever needs to be shown

  // THEY ARE SOME BUGS IN THE BINARY CALC
  //

  return (
    <div className="calculation-container">
      <div>
        <h3>binary to dec</h3>
        {binaryToDecimalCalc(binary)}
      </div>
      <div>
        <h3>binary to hexa</h3>
        {binaryToHexaCalc(binary)}
      </div>
    </div>
  );
};

export default BinaryCalculation;
