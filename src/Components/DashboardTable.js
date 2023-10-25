import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Title from './Title';

const columns = [
  { id: 'productname', label: 'Product name', minWidth: 170},
  { id: 'catogary', label: 'Category', minWidth: 100 },
  { id: 'price', label: 'Price', minWidth: 100 },
  { id: 'sold', label: 'Sold', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100, isStatus: true },
  { id: 'date', label: 'Date', minWidth: 100 },
];

function createData(productname, catogary, price, sold,status,date) {
  return { productname, catogary, price, sold,status,date};
}

const rows = [
  createData('Chair', 'Home Accessories', '$320','$756','Out of Stock','24/May/2023'),
  createData('T-Shirt', 'Home Accessories', '$320', '$756','Available','24/May/2023'),
  createData('Chair', 'Home Accessories', '$320','$756','Out of Stock','24/May/2023'),
  createData('T-Shirt', 'Home Accessories', '$320', '$756','Available','24/May/2023'),
  createData('Chair', 'Home Accessories', '$320','$756','Out of Stock','24/May/2023'),
  createData('T-Shirt', 'Home Accessories', '$320', '$756','Available','24/May/2023'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rows.length);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='mytable'>  
    <Tabs>
    <TabList>
    <Tab>Product purchase history</Tab>
    <Tab>contact history</Tab>
    <Tab>cases</Tab>
    </TabList>
    <div className='tabdody'>
    <TabPanel>
    {/* <Title name='Purchase Detail'/> */}
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className='table-area'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                         {column.isStatus ? <p style={{padding: '8px 19px',borderRadius:'8px',textAlign:'center',color: "white",backgroundColor: value==="Out of Stock" ? "#ADADAD" : "#8AC791"}}>{value}</p> : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions= {0}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
   
    </TabPanel>
    <TabPanel>
    {/* <Title name='Purchase Detail2'/> */}
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className='table-area'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}

                         {column.isStatus ? <p style={{padding: '8px 19px',borderRadius:'8px',textAlign:'center',color: "white",backgroundColor: value==="Out of Stock" ? "#ADADAD" : "#8AC791"}}>{value}</p> : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions= {0}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    </TabPanel>
    <TabPanel>
    {/* <Title name='Purchase Detail'/> */}
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className='table-area'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}

                         {column.isStatus ? <p style={{padding: '8px 19px',borderRadius:'8px',textAlign:'center',color: "white",backgroundColor: value==="Out of Stock" ? "#ADADAD" : "#8AC791"}}>{value}</p> : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions= {0}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  
    </TabPanel>
    </div>
    </Tabs>
</div>
   
  );
}