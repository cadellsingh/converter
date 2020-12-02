import React from "react";
import { hexadecimalValidation } from "../utils/validation";
import { binaryValue, reverseString, uid } from "../utils/helpers";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "../utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "../DisplayCalculation";
import { footerCalculation } from "../BinaryCalculation/BinaryToDecimalCalculation";

const HexadecimalToDecimalCalculation = ({ hexadecimal }) => {
  const calculation = (hexadecimal) => {
    const reversedString = reverseString(hexadecimal);
    const decValues = decimalValues();

    return valuesToBeAdded().map((digit, index) => {
      let hex = reversedString.split("")[index];

      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>{hex.toUpperCase()}</TableCellCalculation>
          <TableCellCalculation>{decValues[index]}</TableCellCalculation>
          <TableCellCalculation>
            {decValues[index]}
            <span>&#215;</span>16<sup>{index}</sup>
          </TableCellCalculation>
          <TableCellCalculation>
            {digit}
            <sub>10</sub>
          </TableCellCalculation>
        </StyledTableRow>
      );
    });
  };

  const valuesToBeAdded = () => {
    if (!hexadecimalValidation(hexadecimal)) {
      return null;
    }

    return decimalValues().map((digit, index) => {
      return digit * Math.pow(16, index);
    });
  };

  const decimalValues = () => {
    return reverseString(hexadecimal)
      .split("")
      .map((alpha) => {
        return isNaN(alpha) ? binaryValue(alpha) : parseInt(alpha);
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
      footer={footerCalculation(valuesToBeAdded())}
    />
  );
};

export default HexadecimalToDecimalCalculation;
