import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
const useStyles = makeStyles({
  outlined: {
    margin: "0px",
    border: `${pxToRem(1)} solid #97A1A9`,
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    color: "#97A1A9",
  },
  delete: {
    position: "absolute",
    width: `${pxToVw(123)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(358)}`,
  },
});

const DeleteInvoice = () => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      className={clsx(classes.outlined, classes.delete)}
      startIcon={<RemoveIcon />}
    >
      Delete
    </Button>
  );
};

export default DeleteInvoice;
