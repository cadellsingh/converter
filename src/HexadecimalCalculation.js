import React from "react";
import { binaryValue, uid } from "./utils/helpers";
import { reverseString } from "./utils/helpers";
import { decimalToBinary } from "./utils/hexadecimalToBinary";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { hexadecimalValidation } from "./utils/validation";

const HexadecimalCalculation = ({ hexadecimal }) => {
  // calculation methods return shit with invalid input

  const hexadecimalToBinaryCalc = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return "";
    }

    return hexadecimal.split("").map((alpha) => {
      let hex = isNaN(alpha) ? binaryValue(alpha) : alpha;
      let binary = decimalToBinary(hex);

      return (
        <ListItem key={uid()}>
          <ListItemText className="center-text">
            {alpha.toUpperCase()} = {binary}
          </ListItemText>
        </ListItem>
      );
    });
  };

  const hexadecimalToDecimalCalc = (hexadecimal) => {
    if (!hexadecimalValidation(hexadecimal)) {
      return "";
    }

    let hexaArray = reverseString(hexadecimal)
      .split("")
      .map((alpha) => {
        return isNaN(alpha) ? binaryValue(alpha) : parseInt(alpha);
      });

    return hexaArray.map((digit, index) => {
      let sum = digit * Math.pow(16, index);
      return (
        <ListItem key={uid()}>
          <ListItemText className="center-text">
            {digit}
            <span>&#215;</span>16<sup>{index}</sup> = {sum}
            <sub>10</sub>
          </ListItemText>
        </ListItem>
      );
    });
  };

  return (
    <Grid container justify="center" spacing={9}>
      <Grid item className="test">
        <Paper>
          <List>
            <ListSubheader className="center-text">
              <h2>Hexadecimal To Decimal</h2>
            </ListSubheader>
            <Divider />
            {hexadecimalToDecimalCalc(hexadecimal)}
          </List>
        </Paper>
      </Grid>
      <Grid item className="test">
        <Paper>
          <List>
            <ListSubheader className="center-text">
              <h2>Hexadecimal To Binary</h2>
            </ListSubheader>
            <Divider />
            {hexadecimalToBinaryCalc(hexadecimal)}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HexadecimalCalculation;
