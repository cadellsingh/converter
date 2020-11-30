import React, { useContext } from "react";
import NumberSystem from "./NumberSystem";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";
import MyContext from "./MyContext";

const NumberSystemRow = () => {
  const { input, displaySteps } = useContext(MyContext);

  return (
    <div className="number-system-grid">
      <div className="grid-item">
        <NumberSystem
          input={input.decimal}
          text="decimal"
          valid={decimalValidation(input.decimal)}
          displaySteps={displaySteps.decimal}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.binary}
          text="binary"
          valid={binaryValidation(input.binary)}
          displaySteps={displaySteps.binary}
        />
      </div>

      <div className="grid-item">
        <NumberSystem
          input={input.hexadecimal}
          text="hexadecimal"
          valid={hexadecimalValidation(input.hexadecimal)}
          displaySteps={displaySteps.hexadecimal}
        />
      </div>
    </div>
  );
};

export default NumberSystemRow;
