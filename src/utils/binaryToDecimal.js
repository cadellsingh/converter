// import { reverseString } from "./reverseString";
import { reverseString } from "./helpers";

export const binaryToDecimal = (binary) => {
  binary = reverseString(binary);
  let sum = 0;

  for (let i = 0; i < binary.length; i++) {
    sum += binary[i] === "1" && Math.pow(2, i);
  }

  return sum;
};
