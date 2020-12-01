import React from "react";
import { hexadecimalValidation } from "./utils/validation";
import { binaryValue, uid } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";
import {
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "./utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "./DisplayCalculation";

const HexadecimalToBinaryCalculation = ({ hexadecimal }) => {
  const calculation = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return null;
    }

    return hexadecimal.split("").map((alpha) => {
      let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
      let binary = decimalToBinary(hex);

      return (
        <StyledTableRow key={uid()}>
          <TableCellCalculation>
            ({alpha.toUpperCase()})<sub>16</sub>
          </TableCellCalculation>
          <TableCellCalculation>
            ({binary})<sub>2</sub>
          </TableCellCalculation>
        </StyledTableRow>
      );
    });
  };

  const hexaToBinaryTableCells = (
    <TableRow>
      <StyledTableCell>Hexadecimal</StyledTableCell>
      <StyledTableCell>Binary</StyledTableCell>
    </TableRow>
  );

  return (
    <DisplayCalculation
      text="Hexadecimal To Binary"
      styledTableCells={hexaToBinaryTableCells}
      calculation={calculation(hexadecimal)}
    />
  );
};

export default HexadecimalToBinaryCalculation;
