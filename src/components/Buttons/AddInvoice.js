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
  const [name, setName] = useState('abc');
  const [custNum, setCustNum] = useState(789);
  const [docId, setDocId] = useState(123);
  const [invoiceAmt, setInvoiceAmt] = useState(100.5);
  const [notes, setNotes] = useState('Lorem');
  const [dueDate, setDueDate] = useState('2021-01-01');

  const ChangeName = (event) => {
    setName(event.target.value);
  };
  const ChangeDocID = (event) => {
    setDocId(event.target.value);
  };
  const ChangeCustNum = (event) => {
    setCustNum(event.target.value);
  };
  const ChangeInvoiceAmt = (event) => {
    setInvoiceAmt(event.target.value);
  };
  const ChangeNotes = (event) => {
    setNotes(event.target.value);
  };
  const ChangeDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setName(document.querySelector('#name').value)
    setDocId(document.querySelector('#docId').value)
    setCustNum(document.querySelector('#custNo').value)
    setInvoiceAmt(document.querySelector('#invAmt').value)
    setNotes(document.querySelector('#notes').value)
    setDueDate(document.querySelector('#dueDate').value)
    // const a = String(name)
    const data = {
      "name_customer": name,
      "cust_number": custNum,
      "doc_id": docId,
      "total_open_amount": invoiceAmt,
      "due_in_date": dueDate,
      "notes": notes
    }
    console.log("data is :",data)
    axios.post('http://localhost:8080/1805170/add',data)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
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
            onChange={ChangeName}
            label="Customer Name"
            type="text"
            fullWidth
            required="true"
            className="field"
          />
          <TextField
            autoFocus
            margin="dense"
            id="docId"
            value={docId}
            onChange={ChangeDocID}
            label="Doc id"
            type="text"
            fullWidth
            className="field"
          />
          <TextField
            autoFocus
            margin="dense"
            id="custNo"
            value={custNum}
            onChange={ChangeCustNum}
            label="Customer Number"
            type="text"
            fullWidth
            className="field"
          />
          <TextField
            autoFocus
            margin="dense"
            id="invAmt"
            value={invoiceAmt}
            onChange={ChangeInvoiceAmt}
            label="Invoice Amount"
            type="text"
            fullWidth
            className="field"
          />
          <TextField
            autoFocus
            margin="dense"
            id="notes"
            value={notes}
            onChange={ChangeNotes}
            label="notes"
            type="text"
            fullWidth
            className="field"
          />
          <TextField
            autoFocus
            margin="dense"
            id="dueDate"
            value={dueDate}
            onChange={ChangeDueDate}
            label="Due Date"
            type="text"
            fullWidth
            className="field"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddInvoice;
