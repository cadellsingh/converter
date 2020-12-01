import React from "react";
import { hexadecimalValidation } from "./utils/validation";
import { binaryValue, reverseString, uid } from "./utils/helpers";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";

const HexadecimalToDecimalCalculation = ({ hexadecimal }) => {
  const calculation = (hexadecimal) => {
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

  return (
    <DisplayCalculation
      text="Hexadecimal To Decimal"
      styledTableCells={hexaToDecTableCells}
      calculation={calculation(hexadecimal)}
    />
  );
};

export default HexadecimalToDecimalCalculation;
