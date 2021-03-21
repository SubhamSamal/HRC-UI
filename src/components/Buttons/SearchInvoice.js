import { makeStyles } from "@material-ui/core/styles";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
    outlined: {
      margin: "0px",
      border: `${pxToRem(1)} solid #97A1A9`,
      borderRadius: `${pxToRem(10)}`,
      opacity: "1",
      color: "#97A1A9",
    },
    search: {
      background: "#283A46 0% 0% no-repeat padding-box",
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

  const SearchInvoice = () => {
    const classes = useStyles();
      return (
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
      )
  }
  
  export default SearchInvoice
  