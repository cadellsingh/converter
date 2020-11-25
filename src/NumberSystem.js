import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";
import { TextfieldStyling } from "./utils/styling";

const NumberSystem = ({
  input,
  text,
  handleOnChange,
  valid,
  handleOnClick,
  clickedOn,
  handleOnButtonClick,
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const classes = TextfieldStyling();

  // prob put validation in here

  return (
    <div>
      <TextField
        variant="outlined"
        label={!valid ? "Invalid" : capitalize(text)}
        name={text}
        value={input}
        onChange={handleOnChange}
        onClick={handleOnClick}
        fullWidth={true}
        className={classes.root}
      />

      <Button
        text={text}
        clickedOn={clickedOn}
        handleOnButtonClick={handleOnButtonClick}
      />
    </div>
  );
};

export default NumberSystem;
