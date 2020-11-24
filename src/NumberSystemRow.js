import React from "react";
import NumberSystem from "./NumberSystem";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";

const NumberSystemRow = ({
  input,
  handleOnChange,
  handleOnClick,
  clickedOn,
}) => {
  return (
    <div className="number-system-grid">
      <div className="grid-item">
        <NumberSystem
          input={input.decimal}
          text="decimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={decimalValidation(input.decimal)}
          clickedOn={clickedOn.decimal}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.binary}
          text="binary"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={binaryValidation(input.binary)}
          clickedOn={clickedOn.binary}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.hexadecimal}
          text="hexadecimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={hexadecimalValidation(input.hexadecimal)}
          clickedOn={clickedOn.hexadecimal}
        />
      </div>
    </div>
  );
};

export default NumberSystemRow;
