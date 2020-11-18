import React from "react";
import NumberSystem from "./NumberSystem";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";

const NumberSystemRow = ({ input, handleOnChange, handleOnClick }) => {
  return (
    <form>
      <NumberSystem
        input={input.decimal}
        text="decimal"
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
        valid={decimalValidation(input.decimal)}
      />

      <NumberSystem
        input={input.binary}
        text="binary"
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
        valid={binaryValidation(input.binary)}
      />

      <NumberSystem
        input={input.hexadecimal}
        text="hexadecimal"
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
        valid={hexadecimalValidation(input.hexadecimal)}
      />
    </form>
  );
};

export default NumberSystemRow;