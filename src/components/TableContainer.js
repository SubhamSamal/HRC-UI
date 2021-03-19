import { makeStyles } from '@material-ui/core';
import { pxToVw } from '../utils/theme'
import { pxToVh } from '../utils/theme'
import { pxToRem } from '../utils/theme'
const useStyles = makeStyles({
    TableContainer : {
        position : "absolute",
        top: `${pxToVh(161)}`,
        left: `${pxToVw(30)}`,
        bottom: `${pxToVh(30)}`,
        right: `${pxToVw(30)}`,
        background: "#273D49CC 0% 0% no-repeat padding-box",
        borderRadius: `${pxToRem(10)}`,
        opacity: "1",
        },
    })
const TableContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.TableContainer}>
            
        </div>
    )
}

export default TableContainer
