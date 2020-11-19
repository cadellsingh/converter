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

export const binaryLetter = (sum) => {
  return {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  }[sum];
};

export const splitString = (string) => {
  string = string === "" ? " " : string;
  return string.match(/.{1,4}/g);
};

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
