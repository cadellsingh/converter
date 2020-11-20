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

const DecimalCalculation = ({ decimal }) => {
  const decimalToBinaryCalc = (decimal) => {
    let bitNum = 0;
    let calculations = [];

    while (decimal > 0) {
      let quotient = Math.floor(decimal / 2);
      let remainder = decimal % 2;

      calculations.push(
        <TableRow key={uid()}>
          <TableCell>{decimal} / 2</TableCell>
          <TableCell>{quotient}</TableCell>
          <TableCell>{remainder}</TableCell>
          <TableCell>{bitNum}</TableCell>
        </TableRow>
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
          <TableCell>{decimal} / 16</TableCell>
          <TableCell>{quotient}</TableCell>
          <TableCell>{remainder}</TableCell>
          <TableCell>{remainderHex}</TableCell>
          <TableCell> {bitNum}</TableCell>
        </StyledTableRow>
      );

      bitNum++;
      decimal = quotient;
    }

    return calculations;
  };

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

  // could make a table component to handle the table styling

  return (
    <div className="calculation-container">
      <div>
        <h3>Calculation</h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Division by 2</TableCell>
                <TableCell>Quotient</TableCell>
                <TableCell>Remainder</TableCell>
                <TableCell>Bit Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{decimalToBinaryCalc(decimal)}</TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <h3>Calculation</h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Division by 16</StyledTableCell>
                <StyledTableCell>Quotient</StyledTableCell>
                <StyledTableCell>Remainder (decimal):</StyledTableCell>
                <StyledTableCell>Remainder (hexadecimal):</StyledTableCell>
                <StyledTableCell>Bit Number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{decimalToHexadecimalCalc(decimal)}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DecimalCalculation;
