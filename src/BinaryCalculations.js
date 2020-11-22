import React from "react";
import { binaryLetter, reverseString, splitString, uid } from "./utils/helpers";
import { binaryValidation } from "./utils/validation";
import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import DisplayCalculation from "./DisplayCalculation";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const BinaryCalculation = ({ binary }) => {
  const binaryToHexaCalc = (binary) => {
    if (!binaryValidation(binary) || binary === "") {
      return "";
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
          <TableCell>
            ({reverseString(data)})<sub>2</sub>
          </TableCell>
          <TableCell>
            ({hexadecimal})<sub>16</sub>
          </TableCell>
        </StyledTableRow>
      );
    });
  };

  const binaryToDecimalCalc = (binary) => {
    if (!binaryValidation(binary)) {
      return "";
    }

    return reverseString(binary)
      .split("")
      .map((digit, index) => {
        let num = digit * Math.pow(2, index);

        return (
          <StyledTableRow key={uid()}>
            <TableCell align="center">{digit}</TableCell>
            <TableCell align="center">
              {digit}
              <span>&#215;</span>2<sup>{index}</sup>
            </TableCell>
            <TableCell align="center">
              {num}
              <sub>10</sub>
            </TableCell>
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
