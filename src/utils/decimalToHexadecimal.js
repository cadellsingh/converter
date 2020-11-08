import { reverseString } from "./helpers";
import { binaryLetter } from "./helpers";

export const decimalToHexadecimal = (decimal) => {
  let hexadecimal = "";

  while (decimal > 0) {
    let remainder = decimal % 16;
    decimal = Math.floor(decimal / 16);

    hexadecimal += remainder > 9 ? binaryLetter(remainder) : remainder;
  }

  return reverseString(hexadecimal);
};
