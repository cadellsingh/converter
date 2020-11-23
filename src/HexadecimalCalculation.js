import React from "react";
import { binaryValue, uid } from "./utils/helpers";
import { reverseString } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";
import Grid from "@material-ui/core/Grid";
import { hexadecimalValidation } from "./utils/validation";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";

const HexadecimalCalculation = ({ hexadecimal }) => {
  const hexadecimalToBinaryCalc = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return null;
    }

    return hexadecimal.split("").map((alpha) => {
      let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
      let binary = decimalToBinary(hex);

      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            ({alpha.toUpperCase()})<sub>16</sub>
          </TableCellCalculation>
          <TableCellCalculation>
            ({binary})<sub>2</sub>
          </TableCellCalculation>
        </StyledTableRow>
      );
    });
  };

  const hexadecimalToDecimalCalc = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return null;
    }

    const reversedString = reverseString(hexadecimal);

    let hexaArray = reversedString.split("").map((alpha) => {
      return isNaN(alpha) ? binaryValue(alpha) : parseInt(alpha);
    });

    return hexaArray.map((digit, index) => {
      let power = digit * Math.pow(16, index);
      let hex = reversedString.split("")[index];

      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>{hex.toUpperCase()}</TableCellCalculation>
          <TableCellCalculation>{digit}</TableCellCalculation>
          <TableCellCalculation>
            {digit}
            <span>&#215;</span>16<sup>{index}</sup>
          </TableCellCalculation>
          <TableCellCalculation>
            {power}
            <sub>10</sub>
          </TableCellCalculation>
        </StyledTableRow>
      );
    });
  };

  const hexaToDecTableCells = (
    <TableRow>
      <StyledTableCell>Hexadecimal</StyledTableCell>
      <StyledTableCell>DEC Value</StyledTableCell>
      <StyledTableCell>
        DEC <span>&#215;</span> 16<sup>n</sup>
      </StyledTableCell>
      <StyledTableCell>Value</StyledTableCell>
    </TableRow>
  );

  const hexaToBinaryTableCells = (
    <TableRow>
      <StyledTableCell>Hexadecimal</StyledTableCell>
      <StyledTableCell>Binary</StyledTableCell>
    </TableRow>
  );

  return (
    <Grid container justify="center" spacing={9}>
      <DisplayCalculation
        text="Hexadecimal To Decimal"
        styledTableCells={hexaToDecTableCells}
        calculation={hexadecimalToDecimalCalc(hexadecimal)}
      />

      <DisplayCalculation
        text="Hexadecimal To Binary"
        styledTableCells={hexaToBinaryTableCells}
        calculation={hexadecimalToBinaryCalc(hexadecimal)}
      />
    </Grid>
  );
};

export default HexadecimalCalculation;
