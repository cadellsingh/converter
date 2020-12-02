import React from "react";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "../utils/styling";
import { uid } from "../utils/helpers";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "../DisplayCalculation";
import { decimalToBinary } from "../utils/decimalToBinary";

const DecimalToBinaryCalculation = ({ decimal }) => {
  const calculation = (decimal) => {
    let bitNum = 0;
    let calculations = [];
    let counter = decimal;

    while (counter > 0) {
      let quotient = Math.floor(counter / 2);
      let remainder = counter % 2;

      calculations.push(
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            {counter} <span>&#x2215;</span> 2
          </TableCellCalculation>
          <TableCellCalculation>{quotient}</TableCellCalculation>
          <TableCellCalculation>{remainder}</TableCellCalculation>
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
        <sub>10</sub> = {decimalToBinary(decimal)}
        <sub>2</sub>
      </span>
    );
  };

  const decimalToBinaryTableCells = (
    <TableRow>
      <StyledTableCell>Division by 2</StyledTableCell>
      <StyledTableCell>Quotient</StyledTableCell>
      <StyledTableCell>Remainder</StyledTableCell>
      <StyledTableCell>Bit #</StyledTableCell>
    </TableRow>
  );

  return (
    <DisplayCalculation
      text="Decimal To Binary"
      styledTableCells={decimalToBinaryTableCells}
      calculation={calculation(decimal)}
      footer={footerCalculation()}
    />
  );
};

export default DecimalToBinaryCalculation;
