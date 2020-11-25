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
  displaySteps,
  handleOnButtonClick,
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const classes = TextfieldStyling();

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

      {/*can send valid here */}
      {/*if valid => show steps*/}
      <Button
        text={text}
        displaySteps={displaySteps}
        handleOnButtonClick={handleOnButtonClick}
      />
    </div>
  );
};

export default NumberSystem;
