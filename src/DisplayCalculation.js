import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { motion } from "framer-motion";

const DisplayCalculation = ({ text, styledTableCells, calculation }) => {
  return (
    <motion.div
      className="calculation-item"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
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
    </motion.div>
  );
};

export default DisplayCalculation;
