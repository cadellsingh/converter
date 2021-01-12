import React from "react";
import { hexadecimalValidation } from "../utils/validation";
import { binaryValue, uid } from "../utils/helpers";
import { decimalToBinary } from "../utils/hexadecimalToBinary";
import {
  HighlightedTableCell,
  StyledTableCell,
  StyledTableRow,
  TableCellCalculation,
} from "../utils/styling";
import TableRow from "@material-ui/core/TableRow";
import DisplayCalculation from "../components/DisplayCalculation";
import { hexadecimalToBinary } from "../utils/hexadecimalToBinary";

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
          <HighlightedTableCell>
            ({binary})<sub>2</sub>
          </HighlightedTableCell>
        </StyledTableRow>
      );
    });
  };

  const footerCalculation = () => {
    return (
      <span>
        {hexadecimal}
        <sub>16</sub> = {hexadecimalToBinary(hexadecimal)}
        <sub>2</sub>
      </span>
    );
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
      footer={footerCalculation()}
    />
  );
};

export default HexadecimalToBinaryCalculation;
