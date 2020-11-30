import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";
import { TextfieldStyling } from "./utils/styling";
import MyContext from "./MyContext";

const NumberSystem = ({ input, text, valid, displaySteps }) => {
  const { handleOnChange, handleOnClick } = useContext(MyContext);

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

      <Button text={text} displaySteps={displaySteps} />
    </div>
  );
};

export default NumberSystem;
