export const reverseString = (string) => {
  return string.split("").reverse().join("");
};

export const binaryValue = (letter) => {
  return {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }[letter.toUpperCase()];
};
