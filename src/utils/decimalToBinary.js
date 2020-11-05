import { reverseString } from "./reverseString";

export const decimalToBinary = (decimal) => {
  let binary = "";

  while (decimal > 0) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }

  return reverseString(binary);
};
