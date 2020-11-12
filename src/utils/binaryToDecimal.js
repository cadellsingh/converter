import { reverseString } from "./helpers";
import { binaryValidation } from "./validation";

export const binaryToDecimal = (binary) => {
  if (!binaryValidation(binary)) {
    return "";
  }

  binary = reverseString(binary);
  let sum = 0;

  for (let i = 0; i < binary.length; i++) {
    sum += binary[i] === "1" && Math.pow(2, i);
  }

  return sum;
};
