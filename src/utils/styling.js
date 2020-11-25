import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    textAlign: "center",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const TableCellCalculation = withStyles(() => ({
  body: {
    textAlign: "center",
  },
}))(TableCell);

export const TextfieldStyling = makeStyles({
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
