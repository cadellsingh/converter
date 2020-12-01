import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

const DisplayCalculation = ({
  text,
  styledTableCells,
  calculation,
  footer,
}) => {
  return (
    <div className="calculation-item">
      <List>
        <h2 className="center-text">{text}</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>{styledTableCells}</TableHead>
            <TableBody>{calculation}</TableBody>
          </Table>
          {footer}
        </TableContainer>
      </List>
    </div>
  );
};

export default DisplayCalculation;
