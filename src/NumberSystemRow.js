import React from "react";
import NumberSystem from "./NumberSystem";
import {
  binaryValidation,
  decimalValidation,
  hexadecimalValidation,
} from "./utils/validation";
import Grid from "@material-ui/core/Grid";

const NumberSystemRow = ({ input, handleOnChange, handleOnClick }) => {
  return (
    <Grid container justify="center" spacing={9}>
      <Grid item>
        <NumberSystem
          input={input.decimal}
          text="decimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={decimalValidation(input.decimal)}
        />
      </Grid>

      <Grid item>
        <NumberSystem
          input={input.binary}
          text="binary"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={binaryValidation(input.binary)}
        />
      </Grid>

      <Grid item>
        <NumberSystem
          input={input.hexadecimal}
          text="hexadecimal"
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          valid={hexadecimalValidation(input.hexadecimal)}
        />
      </Grid>
    </Grid>
  );
};

export default NumberSystemRow;
