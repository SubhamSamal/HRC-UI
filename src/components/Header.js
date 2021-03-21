import {ReactComponent as Companylogo} from '../assets/companyLogo.svg'
import {ReactComponent as Hrclogo} from '../assets/logo.svg'
import { makeStyles } from '@material-ui/core';
import { pxToVw } from '../utils/theme'
import { pxToVh } from '../utils/theme'
import clsx from "clsx";
import '../App.css';
const useStyles = makeStyles({
  header2 : {
    top: `${pxToVh(20)}`,
    height: `${pxToVh(50)}`,
  },
companylogo: {
  position: "absolute",
  left: `${pxToVw(20)}`,
},
})
const Header = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.header2,"header")}>
          < Companylogo className={classes.companylogo}/>
          < Hrclogo />
          
    </div>
  );
};

export default Header;
