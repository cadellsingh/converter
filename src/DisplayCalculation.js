import React from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

// center table rows

const DisplayCalculation = ({ text, styledTableCells, calculation }) => {
  return (
    <Grid item className="test">
      <Paper>
        <List>
          <h2 className="center-text">{text}</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>{styledTableCells}</TableHead>
              <TableBody>{calculation}</TableBody>
            </Table>
          </TableContainer>
        </List>
      </Paper>
    </Grid>
  );
};

export default DisplayCalculation;
