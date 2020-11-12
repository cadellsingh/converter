import { binaryValue } from "./helpers";
import { reverseString } from "./helpers";
import { hexadecimalValidation } from "./validation";

export const hexadecimalToBinary = (hexadecimal) => {
  if (!hexadecimalValidation(hexadecimal)) {
    return "";
  }

  let binary = "";

  for (const value of hexadecimal.split("")) {
    let decimal = isNaN(value) ? binaryValue(value) : value;

    binary += decimalToBinary(decimal);
  }

  return binary;
};

const decimalToBinary = (decimal) => {
  let binary = "";

  while (decimal > 0) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }

  while (binary.length < 4) {
    binary += "0";
  }

  return reverseString(binary);
};
