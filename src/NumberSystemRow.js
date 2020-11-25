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
  displaySteps,
  handleOnButtonClick,
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
          displaySteps={displaySteps.decimal}
          handleOnButtonClick={handleOnButtonClick}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.binary}
          text="binary"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={binaryValidation(input.binary)}
          displaySteps={displaySteps.binary}
          handleOnButtonClick={handleOnButtonClick}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.hexadecimal}
          text="hexadecimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={hexadecimalValidation(input.hexadecimal)}
          displaySteps={displaySteps.hexadecimal}
          handleOnButtonClick={handleOnButtonClick}
        />
      </div>
    </div>
  );
};

export default NumberSystemRow;
