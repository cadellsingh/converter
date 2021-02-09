import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "../utils/validation";

export const ButtonReducer = (state, action) => {
  let value = action.value;

  action.value === ""
    ? showCalculationButton(state, false)
    : showCalculationButton(state, true);

  switch (action.type) {
    case "decimal":
      !decimalValidation(value) && showCalculationButton(state, false);
      return { ...state, decimal: false };
    case "binary":
      !binaryValidation(value) && showCalculationButton(state, false);
      return { ...state, binary: false };
    case "hexadecimal":
      !hexadecimalValidation(value) && showCalculationButton(state, false);
      return { ...state, hexadecimal: false };
    default:
      throw new Error();
  }
};

// false => invalid input was entered and should hide the "show steps" button
const showCalculationButton = (state, bool) => {
  Object.keys(state).forEach((key) => (state[key] = bool));
};
