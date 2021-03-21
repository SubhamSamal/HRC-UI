import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#2A3E4C",
    color: theme.palette.common.white,
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#2A3E4C",
    color: theme.palette.common.white,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: "#2A3E4C",
    color: theme.palette.common.white,
  },
}))(MuiDialogActions);
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
    top: `${pxToVh(0)}`,
    width: `${pxToVw(123)}`,
    height: `${pxToVh(45)}`,
    right: `${pxToVw(358)}`,
  },
});

const DeleteInvoice = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
    <Button
      variant="outlined"
      className={clsx(classes.outlined, classes.delete)}
      startIcon={<RemoveIcon />}
      onClick={handleClickOpen}
    >
      Delete
    </Button>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"Delete record(s)?"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" style={{color: "#fff"}}>
        You'll lose your record(s) after this action.We can't recover them once you delete.

        <div 
        style ={{height:12}}>
        <p>Are you sure you want to permanently delete them?</p>
        </div>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button 
      variant="contained"
      style = {{ border: "1px solid #14AFF1", textTransform : 'none'}}
      onClick={handleClose} color="secondary">
        Cancel
      </Button>
      <Button
      variant="contained"
      style = {{backgroundColor: "#14AFF1" , textTransform : 'none'}}
      onClick={handleClose} color="primary" autoFocus>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
  </div>
  );
};

export default DeleteInvoice;
