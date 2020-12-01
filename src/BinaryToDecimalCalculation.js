import React from "react";
import { binaryValidation } from "./utils/validation";
import { reverseString, uid } from "./utils/helpers";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";

const BinaryToDecimalCalculation = ({ binary }) => {
  const calculation = (binary) => {
    binary = reverseString(binary);

    return valuesToBeAdded(binary).map((value, index) => {
      let digit = binary.split("")[index];
      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>{digit}</TableCellCalculation>
          <TableCellCalculation>
            {digit}
            <span>&#215;</span>2<sup>{index}</sup>
          </TableCellCalculation>
          <TableCellCalculation>
            {value}
            <sub>10</sub>
          </TableCellCalculation>
        </StyledTableRow>
      );
    });
  };

  const valuesToBeAdded = (binary) => {
    if (!binaryValidation(binary)) {
      return null;
    }

    return binary.split("").map((digit, index) => {
      return digit * Math.pow(2, index);
    });
  };

  // console.log(valuesToBeAdded(binary));

  const footerCalculation = (arr) => {
    const sum = arr.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    console.log(sum);

    return arr.map((value, index) => {
      return <span key={index}>{value}</span>;
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

  return (
    <DisplayCalculation
      text="Binary To Decimal"
      styledTableCells={binaryToDecTableCells}
      calculation={calculation(binary)}
      footer={footerCalculation(valuesToBeAdded(binary))}
    />
  );
};

export default BinaryToDecimalCalculation;
