import React from "react";
import { binaryValue, uid } from "./utils/helpers";
import { reverseString } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";
import Grid from "@material-ui/core/Grid";
import { hexadecimalValidation } from "./utils/validation";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import DisplayCalculation from "./DisplayCalculation";

// could export these functions
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

const HexadecimalCalculation = ({ hexadecimal }) => {
  const hexadecimalToBinaryCalc = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return "";
    }

    return hexadecimal.split("").map((alpha) => {
      let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
      let binary = decimalToBinary(hex);

      return (
        <StyledTableRow key={uid}>
          <TableCell align="center">
            ({alpha.toUpperCase()})<sub>16</sub>
          </TableCell>
          <TableCell align="center">
            ({binary})<sub>2</sub>
          </TableCell>
        </StyledTableRow>
      );
    });
  };

  const hexadecimalToDecimalCalc = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return "";
    }

    const reversedString = reverseString(hexadecimal);

    let hexaArray = reversedString.split("").map((alpha) => {
      return isNaN(alpha) ? binaryValue(alpha) : parseInt(alpha);
    });

    return hexaArray.map((digit, index) => {
      let power = digit * Math.pow(16, index);
      let hex = reversedString.split("")[index];

      return (
        <StyledTableRow key={uid}>
          <TableCell align="center">{hex.toUpperCase()}</TableCell>
          <TableCell align="center">{digit}</TableCell>
          <TableCell align="center">
            {digit}
            <span>&#215;</span>16<sup>{index}</sup>
          </TableCell>
          <TableCell align="right">
            {power}
            <sub>10</sub>
          </TableCell>
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
