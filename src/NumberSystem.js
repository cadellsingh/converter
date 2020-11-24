import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffb515",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffb515",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff5700",
    },
    "& .MuiOutlinedInput-input": {
      color: "#ffb515",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#ffb515",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#ff5700",
    },
    "& .MuiInputLabel-outlined": {
      color: "#ffb515",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#ffb515",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#ff5700",
    },
  },
});

const NumberSystem = ({
  input,
  text,
  handleOnChange,
  valid,
  handleOnClick,
  clickedOn,
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const displayButton = () => {
    return !clickedOn ? <button>Show Steps</button> : null;
  };

  const classes = useStyles();

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

      {displayButton()}
    </div>
  );
};

export default NumberSystem;
