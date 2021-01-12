import React from "react";
import { binaryValidation } from "../utils/validation";
import { reverseString, uid } from "../utils/helpers";
import {
  HighlightedTableCell,
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "../utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "../components/DisplayCalculation";

export const footerCalculation = (arr) => {
  const sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  arr = arr.filter((value) => value !== 0);

  let calculation = arr.map((value, index) => {
    let sign = index + 1 === arr.length ? "=" : "+ ";

    return (
      <span key={index}>
        {value} {sign}
      </span>
    );
  });

  calculation.push(
    <span key={uid()}>
      {" "}
      {sum}
      <sub>10</sub>
    </span>
  );

  return calculation;
};

const BinaryToDecimalCalculation = ({ binary }) => {
  const calculation = (binary) => {
    return valuesToBeAdded(binary).map((value, index) => {
      let digit = reverseString(binary).split("")[index];
      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>{digit}</TableCellCalculation>
          <TableCellCalculation>
            {digit}
            <span>&#215;</span>2<sup>{index}</sup>
          </TableCellCalculation>
          {value === 0 ? (
            <TableCellCalculation>
              {value}
              <sub>10</sub>
            </TableCellCalculation>
          ) : (
            <HighlightedTableCell>
              {value}
              <sub>10</sub>
            </HighlightedTableCell>
          )}
        </StyledTableRow>
      );
    });
  };

  const valuesToBeAdded = () => {
    if (!binaryValidation(binary)) {
      return null;
    }

    return reverseString(binary)
      .split("")
      .map((digit, index) => {
        return digit * Math.pow(2, index);
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
      footer={footerCalculation(valuesToBeAdded())}
    />
  );
};

export default BinaryToDecimalCalculation;
