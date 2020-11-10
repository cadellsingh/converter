// returns true if valid : false if not

// binary validation -> only 1s and 0s
// hexadecimal validation -> 0-9 & A-F
// decimal validation -> only numbers

export const binaryValidation = (binary) => {
  return /^[0-1]+$/.test(binary) || emptyString(binary);
};

export const hexadecimalValidation = (hexadecimal) => {
  return /^[A-Fa-f0-9]+$/.test(hexadecimal) || emptyString(hexadecimal);
};

export const decimalValidation = (decimal) => {
  return /^[0-9]+$/.test(decimal) || emptyString(decimal);
};

const emptyString = (string) => {
  return string === "";
};
