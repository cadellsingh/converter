import React from "react";
import NumberSystem from "./NumberSystem";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";

const NumberSystemRow = ({ input, handleOnChange, handleOnClick }) => {
  return (
    // adjust spacing based on mobile
    <div className="number-system-grid">
      <div className="grid-item">
        <NumberSystem
          input={input.decimal}
          text="decimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={decimalValidation(input.decimal)}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.binary}
          text="binary"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={binaryValidation(input.binary)}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.hexadecimal}
          text="hexadecimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={hexadecimalValidation(input.hexadecimal)}
        />
      </div>
    </div>
  );
};

export default NumberSystemRow;
