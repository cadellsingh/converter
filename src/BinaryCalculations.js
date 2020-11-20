import React from "react";
import { binaryLetter, reverseString, splitString, uid } from "./utils/helpers";
import { binaryValidation } from "./utils/validation";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const BinaryCalculation = ({ binary }) => {
  // bug here -> test = 10101
  const binaryToHexaCalc = (binary) => {
    if (!binaryValidation(binary) || binary === "") {
      return "";
    }

    return splitString(binary).map((data) => {
      const binaryValues = [1, 2, 4, 8];
      let sum = 0;

      reverseString(data)
        .split("")
        .forEach((digit, index) => {
          sum += digit === "1" && binaryValues[index];
        });

      let hexadecimal = sum <= 9 ? sum : binaryLetter(sum);

      return (
        <ListItem key={uid()}>
          <ListItemText className="center-text">
            {data} = {hexadecimal}
          </ListItemText>
        </ListItem>
      );
    });
  };

  const binaryToDecimalCalc = (binary) => {
    if (!binaryValidation(binary)) {
      return "";
    }

    return reverseString(binary)
      .split("")
      .map((digit, index) => {
        let num = digit * Math.pow(2, index);
        return (
          <ListItem key={uid()}>
            <ListItemText className="center-text">
              {digit}
              <span>&#215;</span>2<sup>{index}</sup> = {num}
              <sub>10</sub>
            </ListItemText>
          </ListItem>
        );
      });
  };

  // could make another component
  //  like calculation and then i'll pass whatever needs to be shown

  return (
    <Grid container justify="center" spacing={9}>
      <Grid item className="test">
        <Paper>
          <List>
            <ListSubheader className="center-text">
              Binary To Decimal
            </ListSubheader>
            <Divider />
            {binaryToDecimalCalc(binary)}
          </List>
        </Paper>
      </Grid>
      <Grid item className="test">
        <Paper>
          <List>
            <ListSubheader className="list-item">
              Binary To Hexadecimal
            </ListSubheader>
            <Divider />
            {binaryToHexaCalc(binary)}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BinaryCalculation;
