import useAxios from "axios-hooks";
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "../App.css";
import { pxToVw } from "../utils/theme";
import { pxToVh } from "../utils/theme";
import ErrorIcon from "@material-ui/icons/Error";
import { pxToRem } from '../utils/theme'
import { withStyles } from "@material-ui/core/styles";

const CustomCheckbox = withStyles({
  root: {
    color: "#97A1A9",
    '&$checked': {
      color: "#14AFF1",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
  tablewrap: {
    position:"relative",
    height: `${pxToVh(765)}`,
    borderRadius: `${pxToRem(6)}`,
  },
  table: {
    position: "absolute",
    height: `${pxToVh(770)}`,
    width: `${pxToVw(1785)}`,
    left: `${pxToVw(30)}`,
    background: "transparent",
    border: "none",
  },
  tableheadcell: {
    color: "#97A1A9",
    font: "normal normal normal 20px/24px Ubuntu",
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
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const limit = 100;
  const classes = useStyles();

  useEffect(() => {
    fetch(`http://localhost:8080/1805170/get?Offset=${currentPage}&Limit=${limit}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
            setCurrentPage((curr) => curr + limit); 
        });
}, []);

const fetchmoreData = () => {
    fetch(`http://localhost:8080/1805170/get?Offset=${currentPage}&Limit=${limit}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData((curr) => curr.concat(json));
            setCurrentPage((curr) => {
                curr === 34 && setHasMore(false);
                return curr + limit;
            });
        });
};
  const [{ loading, error }] = useAxios({
    method: "GET",
    url: "http://localhost:8080/1805170/get?Offset=1&Limit=1",
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
    <div>
    <InfiniteScroll
    dataLength={data.length}
    next={fetchmoreData}
    hasMore={hasMore}
    endMessage = { 
      <h3>Scrolling ends here</h3>
    }
    style={{ marginTop: `${pxToVh(100)}` }}
  >
    <TableContainer className={classes.tablewrap}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tablerow}>
            <TableCell className={classes.tableheadcell}>
              <CustomCheckbox />
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
            <TableRow key={i} className={classes.tablerow} >
              <TableCell className={classes.tablebodycell}>
              <CustomCheckbox />
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
    </InfiniteScroll>
    </div>
  );
};
export default TableDetails;
