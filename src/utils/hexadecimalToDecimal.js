import { binaryValue } from "./helpers";
import { hexadecimalValidation } from "./validation";

export const hexadecimalToDecimal = (hexadecimal) => {
  if (!hexadecimalValidation(hexadecimal)) {
    return "";
  }

  let counter = hexadecimal.length - 1;
  let total = 0;

  for (const value of hexadecimal) {
    let sum = isNaN(value) ? binaryValue(value) : parseInt(value, 10);

    let multiplier = Math.pow(16, counter);
    total += sum * multiplier;

    counter--;
  }

  return total;
};
