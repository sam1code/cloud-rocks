import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(stocks: string, buy: number) {
  return { stocks, buy };
}

const rows = [
  createData("Jackson PLC", 2.4),
  createData("Jackson PLC", 2.4),
  createData("Jackson PLC", 2.4),
  createData("Jackson PLC", 2.4),
  createData("Jackson PLC", 2.4),
];

export default function Left2ndTable() {
  return (
    <TableContainer sx={{ marginX: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 20 }}>Stocks</TableCell>
            <TableCell sx={{ fontSize: 20 }}>Buy new</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.stocks}>
              <StyledTableCell component="th" scope="row">
                {row.stocks}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.buy}
                <span
                  style={{
                    backgroundColor: "#D8D8D8",
                    padding: 5,
                    borderRadius: "20%",
                  }}
                >
                  {row.buy}
                </span>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
