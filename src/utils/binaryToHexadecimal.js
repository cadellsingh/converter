import { reverseString } from "./helpers";

export const binaryToHex = (binary) => {
  const binarySplit = splitString(reverseString(binary));
  let hexadecimal = "";

  for (const value of binarySplit) {
    let sum = binarySum(value);

    hexadecimal += sum <= 9 ? sum : binaryLetter(sum);
  }

  return reverseString(hexadecimal);
};

const splitString = (string) => string.match(/.{1,4}/g);

const binarySum = (currentBinary) => {
  let sum = 0;
  const binaryValues = [1, 2, 4, 8];

  for (let i = 0; i < currentBinary.length; i++) {
    sum += currentBinary[i] === "1" && binaryValues[i];
  }

  return sum;
};

const binaryLetter = (sum) => {
  return {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  }[sum];
};
