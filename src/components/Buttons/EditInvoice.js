import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import clsx from "clsx";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  outlined: {
    margin: "0px",
    border: `${pxToRem(1)} solid #97A1A9`,
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    color: "#97A1A9",
  },
  edit: {
    position: "absolute",
    top: `${pxToVh(0)}`,
    width: `${pxToVw(102)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(499)}`,
  },
});

const EditInvoice = () => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      className={clsx(classes.outlined, classes.edit)}
      startIcon={<EditIcon />}
    >
      Edit
    </Button>
  );
};

export default EditInvoice;
