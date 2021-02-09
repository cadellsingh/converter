import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";
import { TextfieldStyling } from "../utils/styling";
import { GlobalContext } from "../context/GlobalState";

const NumberSystem = ({ input, text, valid, displaySteps }) => {
  const { conversion, displayAppropriateButton } = useContext(GlobalContext);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    conversion(name, value.trim());
    displayAppropriateButton(name, value.trim());
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const classes = TextfieldStyling();

  return (
    <div>
      <form>
        <TextField
          id={text}
          variant="outlined"
          label={!valid ? "Invalid" : capitalize(text)}
          name={text}
          value={input}
          onChange={handleOnChange}
          fullWidth={true}
          className={classes.root}
        />
      </form>

      <Button text={text} displaySteps={displaySteps} />
    </div>
  );
};

export default NumberSystem;
