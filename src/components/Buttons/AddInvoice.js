import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { pxToRem } from "../../utils/theme";
import { pxToVw } from "../../utils/theme";
import { pxToVh } from "../../utils/theme";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import axios from 'axios';
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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">AddInvoice</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={name}
            onChange={handleChange}
            label="Email Address"
            type="email"
            fullWidth
            required="true"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={name}
            onChange={handleChange}
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddInvoice;
