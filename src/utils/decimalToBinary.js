import { reverseString } from "./helpers";
import { decimalValidation } from "./validation";

export const decimalToBinary = (decimal) => {
  if (!decimalValidation(decimal)) {
    return "";
  }

  let binary = "";

  while (decimal > 0) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }

  return reverseString(binary);
};
