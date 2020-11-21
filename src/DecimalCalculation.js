import React from "react";
import { binaryLetter, uid } from "./utils/helpers";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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

const DecimalCalculation = ({ decimal }) => {
  const decimalToBinaryCalc = (decimal) => {
    let bitNum = 0;
    let calculations = [];

    while (decimal > 0) {
      let quotient = Math.floor(decimal / 2);
      let remainder = decimal % 2;

      calculations.push(
        <StyledTableRow key={uid()}>
          <TableCell align="center">
            {decimal} <span>&#x2215;</span> 2
          </TableCell>
          <TableCell align="center">{quotient}</TableCell>
          <TableCell align="center">{remainder}</TableCell>
          <TableCell align="center">{bitNum}</TableCell>
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
          <TableCell align="center">
            {decimal} <span>&#x2215;</span> 16
          </TableCell>
          <TableCell align="center">{quotient}</TableCell>
          <TableCell align="center">{remainder}</TableCell>
          <TableCell align="center">{remainderHex}</TableCell>
          <TableCell align="center">{bitNum}</TableCell>
        </StyledTableRow>
      );

      bitNum++;
      decimal = quotient;
    }

    return calculations;
  };

  // could make a table component to handle the table styling

  return (
    <Grid container justify="center" spacing={9}>
      <Grid item>
        <h3 className="center-text">Decimal To Binary</h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Division by 2</StyledTableCell>
                <StyledTableCell>Quotient</StyledTableCell>
                <StyledTableCell>Remainder</StyledTableCell>
                <StyledTableCell>Bit #</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{decimalToBinaryCalc(decimal)}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <h3 className="center-text">Decimal To Hexadecimal</h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Division by 16</StyledTableCell>
                <StyledTableCell>Quotient</StyledTableCell>
                <StyledTableCell>Remainder (D):</StyledTableCell>
                <StyledTableCell>Remainder (H):</StyledTableCell>
                <StyledTableCell>Bit #</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{decimalToHexadecimalCalc(decimal)}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default DecimalCalculation;
