import { reverseString } from "./helpers";
import { binaryLetter } from "./helpers";
import { decimalValidation } from "./validation";

export const decimalToHexadecimal = (decimal) => {
  if (!decimalValidation(decimal)) {
    return "";
  }

  let hexadecimal = "";

  while (decimal > 0) {
    let remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);

    hexadecimal += remainder > 9 ? binaryLetter(remainder) : remainder;
  }

  return reverseString(hexadecimal);
};
