import React from "react";
import { binaryLetter, uid } from "./utils/helpers";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";

const DecimalCalculation = ({ decimal }) => {
  const decimalToBinaryCalc = (decimal) => {
    let bitNum = 0;
    let calculations = [];

    while (decimal > 0) {
      let quotient = Math.floor(decimal / 2);
      let remainder = decimal % 2;

      calculations.push(
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            {decimal} <span>&#x2215;</span> 2
          </TableCellCalculation>
          <TableCellCalculation>{quotient}</TableCellCalculation>
          <TableCellCalculation>{remainder}</TableCellCalculation>
          <TableCellCalculation>{bitNum}</TableCellCalculation>
        </StyledTableRow>
      );

      bitNum++;
      decimal = quotient;
    }

    return calculations;
  };

  const decimalToHexadecimalCalc = (decimal) => {
    let bitNum = 0;
    let calculations = [];

    while (decimal > 0) {
      let quotient = Math.floor(decimal / 16);
      let remainder = decimal % 16;
      let remainderHex = remainder > 9 ? binaryLetter(remainder) : remainder;

      calculations.push(
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            {decimal}
            <span>&#x2215;</span>16
          </TableCellCalculation>
          <TableCellCalculation>{quotient}</TableCellCalculation>
          <TableCellCalculation>{remainder}</TableCellCalculation>
          <TableCellCalculation>{remainderHex}</TableCellCalculation>
          <TableCellCalculation>{bitNum}</TableCellCalculation>
        </StyledTableRow>
      );

      bitNum++;
      decimal = quotient;
    }

    return calculations;
  };

  const decimalToBinaryTableCells = (
    <TableRow>
      <StyledTableCell>Division by 2</StyledTableCell>
      <StyledTableCell>Quotient</StyledTableCell>
      <StyledTableCell>Remainder</StyledTableCell>
      <StyledTableCell>Bit #</StyledTableCell>
    </TableRow>
  );

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
    // will be displaying one of these
    <div className="calculation-grid">
      <DisplayCalculation
        text="Decimal To Binary"
        styledTableCells={decimalToBinaryTableCells}
        calculation={decimalToBinaryCalc(decimal)}
      />

      <DisplayCalculation
        text="Decimal To Hexadecimal"
        styledTableCells={decimalToHexTableCells}
        calculation={decimalToHexadecimalCalc(decimal)}
      />
    </div>
  );
};

export default DecimalCalculation;
