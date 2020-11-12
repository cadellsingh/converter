import { reverseString } from "./helpers";
import { binaryLetter } from "./helpers";
import { binaryValidation } from "./validation";

export const binaryToHexadecimal = (binary) => {
  if (!binaryValidation(binary)) {
    return "";
  }

  const binarySplit = splitString(reverseString(binary));
  let hexadecimal = "";

  for (const value of binarySplit) {
    let sum = binarySum(value);

    hexadecimal += sum <= 9 ? sum : binaryLetter(sum);
  }

  return reverseString(hexadecimal);
};

const splitString = (string) => {
  string = string === "" ? " " : string;
  return string.match(/.{1,4}/g);
};

const binarySum = (currentBinary) => {
  let sum = 0;
  const binaryValues = [1, 2, 4, 8];

  for (let i = 0; i < currentBinary.length; i++) {
    sum += currentBinary[i] === "1" && binaryValues[i];
  }

  return sum;
};
