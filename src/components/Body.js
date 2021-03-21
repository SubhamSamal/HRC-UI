import { makeStyles } from '@material-ui/core';
import { pxToVw } from '../utils/theme'
import { pxToVh } from '../utils/theme'
const useStyles = makeStyles({
body : {
    position : "absolute",
    top: `${pxToVh(100)}`,
    left: `${pxToVw(30)}`,
    width: `${pxToVw(141)}`,
    height: `${pxToVh(31)}`,
    color: "#FFF",
    textAlign: "left",
    font: "normal normal normal 28px/32px Ubuntu",
    opacity: "1",
    },
})
const Body = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            Invoice List
        </div>
    )
}

export default Body
