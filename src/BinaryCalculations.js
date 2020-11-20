import React from "react";
import { binaryLetter, reverseString, splitString, uid } from "./utils/helpers";
import { binaryValidation } from "./utils/validation";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";

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
          <ListItemText>
            {data} : {hexadecimal}
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
            <ListItemText>
              {digit} * 2 ^ {index}: {num}
            </ListItemText>
          </ListItem>
        );
      });
  };

  // could make another component
  //  like calculation and then i'll pass whatever needs to be shown

  // THEY ARE SOME BUGS IN THE BINARY CALC
  //

  return (
    <Grid container justify="center" spacing={9}>
      <Grid item className="test">
        <List>
          <ListSubheader>Binary To Decimal</ListSubheader>
          {binaryToDecimalCalc(binary)}
          <Divider />
        </List>
      </Grid>
      <Grid item className="test">
        <List>
          <ListSubheader>Binary To Hexadecimal</ListSubheader>
          {binaryToHexaCalc(binary)}
          <Divider />
        </List>
      </Grid>
    </Grid>
  );
};

export default BinaryCalculation;
