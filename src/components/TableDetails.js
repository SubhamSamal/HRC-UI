import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core";
// import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import { pxToVw } from "../utils/theme";
import { pxToVh } from "../utils/theme";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles({
  circularprogressor: {
    position: "absolute",
    top: `${pxToVh(400)}`,
    left: `${pxToVw(860)}`,
  },
  error: {
    position: "absolute",
    top: `${pxToVh(400)}`,
    left: `${pxToVw(860)}`,
    fontSize: "100px",
    color: "#FF5B5B",
  },
  errormessage: {
    position: "absolute",
    top: `${pxToVh(500)}`,
    left: `${pxToVw(650)}`,
    color: "#FFFFFF",
  },
  table: {
    position: "absolute",
    top: `${pxToVh(100)}`,
    left: `${pxToVw(30)}`,
    background: "transparent",
    width: `${pxToVw(1800)}`,
    bottom: `${pxToVh(30)}`,
    border: "none",
  },
  tableheadcell: {
    color: "#97A1A9",
    font: "normal normal normal 18px/21px Ubuntu",
  },
  checkbox: {
    color: "#97A1A9",
    "&$checked": {
      color: "#14AFF1",
    },
    checked: {},
  },
  tablebodycell: {
    color: "#FFF",
    font: "normal normal normal 18px/21px Ubuntu",
    border: "none",
  },
  tablerow: {
    "&:nth-of-type(even)": {
      background: "#283A46 0% 0% no-repeat padding-box",
    },
  },
});
const TableDetails = () => {
  const classes = useStyles();
  const [{ data, loading, error }, refetch] = useAxios({
    method: "GET",
    url: "http://localhost:8080/1805170/get",
  });
  if (loading)
    return (
      <CircularProgress
        disableShrink
        className={classes.circularprogressor}
        size={`${pxToVh(100)}`}
      />
    );
  if (error)
    return (
      <div>
        <ErrorIcon className={classes.error} />
        <div className={classes.errormessage}>
          <h1>Error retriving data from the server</h1>
        </div>
      </div>
    );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tablerow}>
            {console.log(data, loading, error, refetch)}
            <TableCell className={classes.tableheadcell}>
              <Checkbox className={classes.checkbox} />
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Customer Name
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Customer #
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Invoice #
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Invoice Amount
            </TableCell>
            <TableCell className={classes.tableheadcell} align="right">
              Due Date
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Payment Predicted Date
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Predicted Aging Bucket
            </TableCell>
            <TableCell className={classes.tableheadcell} align="left">
              Notes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((header, i) => (
            <TableRow key={i} className={classes.tablerow}>
              <TableCell className={classes.tablebodycell}>
                <Checkbox className={classes.checkbox} />
              </TableCell>
              <TableCell className={classes.tablebodycell} align="center">
                {header.cust_number}
              </TableCell>
              <TableCell className={classes.tablebodycell} align="center">
                {header.name_customer}
              </TableCell>
              <TableCell className={classes.tablebodycell} align="center">
                {header.doc_id}
              </TableCell>
              <TableCell className={classes.tablebodycell} align="center">
                {header.total_open_amount}
              </TableCell>
              <TableCell className={classes.tablebodycell} align="center">
                {header.due_in_date}
              </TableCell>
              <TableCell className={classes.tablebodycell} align="right">
                -
              </TableCell>
              <TableCell className={classes.tablebodycell} align="left">
                -
              </TableCell>
              <TableCell className={classes.tablebodycell} align="center">
                {header.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableDetails;
