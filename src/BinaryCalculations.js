import React from "react";
import { binaryLetter, reverseString, splitString, uid } from "./utils/helpers";
import { binaryValidation } from "./utils/validation";
import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";

const BinaryCalculation = ({ binary }) => {
  const binaryToHexaCalc = (binary) => {
    if (!binaryValidation(binary) || binary === "") {
      return null;
    }

    let binarySplit = splitString(reverseString(binary));

    return binarySplit.map((data) => {
      const binaryValues = [1, 2, 4, 8];
      let sum = 0;

      data.split("").forEach((digit, index) => {
        sum += digit === "1" && binaryValues[index];
      });

      let hexadecimal = sum <= 9 ? sum : binaryLetter(sum);

      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            ({reverseString(data)})<sub>2</sub>
          </TableCellCalculation>
          <TableCellCalculation>
            ({hexadecimal})<sub>16</sub>
          </TableCellCalculation>
        </StyledTableRow>
      );
    });
  };

  const binaryToDecimalCalc = (binary) => {
    if (!binaryValidation(binary)) {
      return null;
    }

    return reverseString(binary)
      .split("")
      .map((digit, index) => {
        let num = digit * Math.pow(2, index);

        return (
          <StyledTableRow key={uid()}>
            <TableCellCalculation>{digit}</TableCellCalculation>
            <TableCellCalculation>
              {digit}
              <span>&#215;</span>2<sup>{index}</sup>
            </TableCellCalculation>
            <TableCellCalculation>
              {num}
              <sub>10</sub>
            </TableCellCalculation>
          </StyledTableRow>
        );
      });
  };

  const binaryToDecTableCells = (
    <TableRow>
      <StyledTableCell>Binary</StyledTableCell>
      <StyledTableCell>
        Binary <span>&#215;</span> 2<sup>n</sup>
      </StyledTableCell>
      <StyledTableCell>Value</StyledTableCell>
    </TableRow>
  );

  const binaryToHexTableCells = (
    <TableRow>
      <StyledTableCell>Binary</StyledTableCell>
      <StyledTableCell>Hexadecimal</StyledTableCell>
    </TableRow>
  );

  return (
    <Grid container justify="center" spacing={9}>
      <DisplayCalculation
        text="Binary To Decimal"
        styledTableCells={binaryToDecTableCells}
        calculation={binaryToDecimalCalc(binary)}
      />

      <DisplayCalculation
        text="Binary to Hexadecimal"
        styledTableCells={binaryToHexTableCells}
        calculation={binaryToHexaCalc(binary)}
      />
    </Grid>
  );
};

export default BinaryCalculation;
