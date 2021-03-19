import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../utils/theme";
import { pxToVw } from "../utils/theme";
import { pxToVh } from "../utils/theme";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  predict: {
    width: `${pxToVw(106)}`,
    height: `${pxToVh(45)}`,
    left: `${pxToVw(0)}`,
    margin: "0px",
    background: "#97A1A9 0% 0% no-repeat padding-box",
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    textAlign: "centre",
    font: `normal normal normal ${pxToRem(28)}/${pxToRem(32)} Ubuntu`,
    color: "#FFF",
  },
  outlined: {
    margin: "0px",
    border: `${pxToRem(1)} solid #97A1A9`,
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    color: "#97A1A9",
  },
  vc: {
    width: `${pxToVw(237)}`,
    height: `${pxToVh(45)}`,
    left: `${pxToVw(18)}`,
    font: `normal normal normal ${pxToRem(20)}/${pxToRem(24)} Ubuntu`,
  },
  delete: {
    position: "absolute",
    width: `${pxToVw(123)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(358)}`,
  },
  edit: {
    position: "absolute",
    width: `${pxToVw(102)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(499)}`,
  },
  add: {
    position: "absolute",
    width: `${pxToVw(99)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(619)}`,
    font: `normal normal normal ${pxToRem(20)}/${pxToRem(24)} Ubuntu`,
    margin: "0px",
    border: `${pxToRem(1)} solid #14AFF1`,
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    color: "#FFF",
  },
  search: {
    background: "transparent",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: `${pxToVh(0)}`,
    border: `${pxToRem(1)} solid #356680`,
    width: `${pxToVw(340)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(0)}`,
    textAlign: "left",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#97A1A9",
    font: `normal normal normal ${pxToRem(22)}/${pxToRem(26)} Ubuntu`,
  },
  iconButton: {
    color: "#97A1A9",
  },
}));
const ButtonRow = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" className={classes.predict}>
        Predict
      </Button>
      <Button variant="outlined" className={clsx(classes.outlined, classes.vc)}>
        View Correspondence
      </Button>
      <Button
        variant="outlined"
        className={classes.add}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
      <Button
        variant="outlined"
        className={clsx(classes.outlined, classes.edit)}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
      <Button
        variant="outlined"
        className={clsx(classes.outlined, classes.delete)}
        startIcon={<RemoveIcon />}
      >
        Delete
      </Button>
      <div className={classes.movesearch}>
      <Paper component="form" className={clsx(classes.outlined, classes.search)}>
        <InputBase
          className={classes.input}
          placeholder="Search by Invoice Number"
          inputProps={{ "aria-label": "Search by Invoice Number" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        
      </Paper>
      </div>
    </div>
  );
};

export default ButtonRow;
