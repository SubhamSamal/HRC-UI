import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import clsx from "clsx";
const useStyles = makeStyles({
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
});
const ViewCorrespondence = () => {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={clsx(classes.outlined, classes.vc)}>
      View Correspondence
    </Button>
  );
};

export default ViewCorrespondence;
