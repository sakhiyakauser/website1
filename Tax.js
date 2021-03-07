

        import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import'./tax.css';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    margin:10,
    padding:5
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('0 - 6,000', 'NIL'),
  createData('6,001 - 35,000', '15% excess over 6,000'),
  createData('35,001 - 80,000', '	4,350 + 30% excess over 35,000'),
  createData('80,001 - 180,000', '17,850 + 38% excess over 80,000'),
  createData('180,001 +', '55,850 + 45% excess over 180,000'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    
    padding:30,
  },
  h1:{
    textAlign:'center',
    fontFamily:'cursive',
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className="tab">
      <div className="img">
        <img className="img"/>
        
      </div>
    <TableContainer className="table">
    <h1 className={classes.h1}>Tax Information</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Taxable Income $</StyledTableCell>
            <StyledTableCell align="right">Tax Payable $</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}






       