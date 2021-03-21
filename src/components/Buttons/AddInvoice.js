import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles({
  add: {
    position: "absolute",
    width: `${pxToVw(99)}`,
    height: `${pxToVh(45)}`,
    top: `${pxToVh(0)}`,
    right: `${pxToVw(619)}`,
    font: `normal normal normal ${pxToRem(20)}/${pxToRem(24)} Ubuntu`,
    margin: "0px",
    border: `${pxToRem(1)} solid #14AFF1`,
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    color: "#FFF",
  },
});

const AddInvoice = () => {
  const classes = useStyles();
  return (
      <Button
        variant="outlined"
        className={classes.add}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
  );
};

export default AddInvoice;
