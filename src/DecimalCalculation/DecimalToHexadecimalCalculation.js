import React from "react";
import { binaryLetter, uid } from "../utils/helpers";
import {
  HighlightedTableCell,
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "../utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "../DisplayCalculation";
import { decimalToHexadecimal } from "../utils/decimalToHexadecimal";

const DecimalToHexadecimalCalculation = ({ decimal }) => {
  const calculation = (decimal) => {
    let bitNum = 0;
    let calculations = [];
    let counter = decimal;

    while (counter > 0) {
      let quotient = Math.floor(counter / 16);
      let remainder = counter % 16;
      let remainderHex = remainder > 9 ? binaryLetter(remainder) : remainder;

      calculations.push(
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            {decimal} <span>&#x2215;</span> 16
          </TableCellCalculation>
          <TableCellCalculation>{quotient}</TableCellCalculation>
          <TableCellCalculation>{remainder}</TableCellCalculation>
          <HighlightedTableCell>{remainderHex}</HighlightedTableCell>
          <TableCellCalculation>{bitNum}</TableCellCalculation>
        </StyledTableRow>
      );

      bitNum++;
      counter = quotient;
    }

    return calculations;
  };

  const footerCalculation = () => {
    return (
      <span>
        {decimal}
        <sub>10</sub> = {decimalToHexadecimal(decimal)}
        <sub>16</sub>
      </span>
    );
  };

  const decimalToHexTableCells = (
    <TableRow>
      <StyledTableCell>Division by 16</StyledTableCell>
      <StyledTableCell>Quotient</StyledTableCell>
      <StyledTableCell>Remainder (D):</StyledTableCell>
      <StyledTableCell>Remainder (H):</StyledTableCell>
      <StyledTableCell>Bit #</StyledTableCell>
    </TableRow>
  );

  return (
    <DisplayCalculation
      text="Decimal To Hexadecimal"
      styledTableCells={decimalToHexTableCells}
      calculation={calculation(decimal)}
      footer={footerCalculation()}
    />
  );
};

export default DecimalToHexadecimalCalculation;
