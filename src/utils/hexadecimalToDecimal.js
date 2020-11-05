export const hexadecimalToDecimal = (hexadecimal) => {
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

const binaryValue = (letter) => {
  return {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }[letter.toUpperCase()];
};
