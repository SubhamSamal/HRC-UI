import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#2A3E4C",
    color: theme.palette.common.white,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.common.white,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
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

const useStyles = makeStyles((theme) => ({
  clearButton: {
    borderColor: "#14AFF1",
    color: theme.palette.common.white,
    textTransform: "none",
    font: "Ubuntu",
  },
  deleteButton1: {
    borderColor: "#14AFF1",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: pxToRem(10),
  },

  addButton2: {
    backgroundColor: "#14AFF1",
    color: theme.palette.common.white,
    textTransform: "none",
    font: "Ubuntu",
  },
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
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: "#fff",
  },
}));

const AddInvoice = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const textStyle = {
    width: "20vh",
    margin: "1.5vh",
    display: "table-cell",
    borderRadius: "1vh",
    border: "0.1vh solid #356680",
    backgroundColor: "#283A46",
    color: "white",
    height: "4vh",
  };

  const labelStyle = {
    display: "table-cell",
  };
  return (
    <div>
      <Button
        variant="outlined"
        className={classes.add}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="false"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Invoice
        </DialogTitle>
        <DialogContent dividers>
          <div
            style={{
              width: "55%",
              float: "left",
              fontSize: "2vh",
              display: "table",
            }}
          >
            <div style={{ display: "table-row" }}>
              <label style={{ ...labelStyle }}>
                Customer Name<span style={{ color: "#FF5B5B" }}> *</span>
              </label>
              <input type="text" style={{ ...textStyle }} required></input>
            </div>

            <div style={{ display: "table-row" }}>
              <label style={{ ...labelStyle }}>
                Customer No.<span style={{ color: "#FF5B5B" }}> *</span>
              </label>
              <input type="text" style={{ ...textStyle }} required></input>
            </div>

            <div style={{ display: "table-row" }}>
              <label style={{ ...labelStyle }}>
                Invoice No.<span style={{ color: "#FF5B5B" }}> *</span>
              </label>
              <input type="text" style={{ ...textStyle }} required></input>
            </div>

            <div style={{ display: "table-row" }}>
              <label style={{ ...labelStyle }}>
                Invoice Amount<span style={{ color: "#FF5B5B" }}> *</span>
              </label>
              <input type="text" style={{ ...textStyle }} required></input>
            </div>
          </div>

          <div
            style={{
              width: "40%",
              float: "right",
              fontSize: "2vh",
              display: "table",
            }}
          >
            <div style={{ display: "table-row" }}>
              <label style={{ ...labelStyle }}>
                Due Date<span style={{ color: "#FF5B5B" }}> *</span>
              </label>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2021-03-21"
                  color = "primary"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>

            <div style={{ display: "table-row" }}>
              <label
                for="textarea"
                style={{ ...labelStyle, verticalAlign: "top" }}
              >
                Notes
              </label>
              <textarea
                id="textarea"
                style={{ ...textStyle, height: "17vh" }}
              ></textarea>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            autoFocus
            onClick={handleClose}
            className={classes.clearButton}
            color="primary.light"
          >
            Clear
          </Button>
          <Button
            variant="outlined"
            autoFocus
            onClick={handleClose}
            className={classes.addButton2}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddInvoice;
