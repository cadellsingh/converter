import React from "react";
import TextField from "@material-ui/core/TextField";

const NumberSystem = ({
  input,
  text,
  handleOnChange,
  valid,
  handleOnClick,
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <TextField
      error={!valid}
      label={!valid ? "Invalid" : capitalize(text)}
      name={text}
      value={input}
      onChange={handleOnChange}
      onClick={handleOnClick}
      fullWidth={true}
      InputProps={{ style: { fontSize: "30px" } }}
    />
  );
};

export default NumberSystem;
