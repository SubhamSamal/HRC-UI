import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
const useStyles = makeStyles({
  predict: {
    width: `${pxToVw(106)}`,
    height: `${pxToVh(45)}`,
    left: `${pxToVw(0)}`,
    margin: "0px",
    background: "#14AFF1 0% 0% no-repeat padding-box",
    borderRadius: `${pxToRem(10)}`,
    opacity: "1",
    textAlign: "centre",
    font: `normal normal normal ${pxToRem(28)}/${pxToRem(32)} Ubuntu`,
    color: "#FFF",
  },
});
const Predict = () => {
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.predict}>
        Predict
      </Button>
    )
}

export default Predict
