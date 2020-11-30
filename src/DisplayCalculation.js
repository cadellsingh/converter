import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { AnimateOnChange } from "react-animation";

const DisplayCalculation = ({ text, styledTableCells, calculation }) => {
  return (
    <div className="calculation-item">
      <AnimateOnChange
        animation="bounce"
        style={{ width: "100%" }}
        duration={500}
      >
        <List>
          <h2 className="center-text">{text}</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>{styledTableCells}</TableHead>
              <TableBody>{calculation}</TableBody>
            </Table>
          </TableContainer>
        </List>
      </AnimateOnChange>
    </div>
  );
};

export default DisplayCalculation;
