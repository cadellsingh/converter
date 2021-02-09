import { binaryToDecimal } from "../utils/binaryToDecimal";
import { binaryToHexadecimal } from "../utils/binaryToHexadecimal";
import { decimalToBinary } from "../utils/decimalToBinary";
import { decimalToHexadecimal } from "../utils/decimalToHexadecimal";
import { hexadecimalToBinary } from "../utils/hexadecimalToBinary";
import { hexadecimalToDecimal } from "../utils/hexadecimalToDecimal";

export const NumberSystemReducer = (state, action) => {
  let value = action.value;

  switch (action.type) {
    case "decimal":
      return {
        ...state,
        decimal: value,
        binary: decimalToBinary(value),
        hexadecimal: decimalToHexadecimal(value),
      };
    case "binary":
      return {
        ...state,
        binary: value,
        decimal: binaryToDecimal(value),
        hexadecimal: binaryToHexadecimal(value),
      };
    case "hexadecimal":
      return {
        ...state,
        hexadecimal: value,
        decimal: hexadecimalToDecimal(value),
        binary: hexadecimalToBinary(value),
      };
    default:
      throw new Error();
  }
};
