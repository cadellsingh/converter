import React from "react";
import { binaryValidation } from "./utils/validation";
import { binaryLetter, reverseString, splitString, uid } from "./utils/helpers";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";
import { binaryToHexadecimal } from "./utils/binaryToHexadecimal";

const BinaryToHexadecimalCalculation = ({ binary }) => {
  const calculation = (binary) => {
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

  const footerCalculation = () => {
    return (
      <span>
        {binary}
        <sub>2</sub> = {binaryToHexadecimal(binary)}
        <sub>16</sub>
      </span>
    );
  };

  const binaryToHexTableCells = (
    <TableRow>
      <StyledTableCell>Binary</StyledTableCell>
      <StyledTableCell>Hexadecimal</StyledTableCell>
    </TableRow>
  );

  return (
    <DisplayCalculation
      text="Binary to Hexadecimal"
      styledTableCells={binaryToHexTableCells}
      calculation={calculation(binary)}
      footer={footerCalculation()}
    />
  );
};

export default BinaryToHexadecimalCalculation;
