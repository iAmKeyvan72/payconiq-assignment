import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomTable = ({ columns, dataSource, label, ...rest }) => {
  return (
    <TableContainer component={Paper} {...rest}>
      <Table sx={{ minWidth: 650 }} aria-label={label}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key}>{col.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((row, index) => {
            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.entries(row).map(([key, value], j) =>
                  j < columns.length ? (
                    index === 0 ? (
                      <TableCell
                        component="th"
                        scope="row"
                        key={key + value + j}
                      >
                        {value}
                      </TableCell>
                    ) : (
                      <TableCell key={key + value + j}>{value}</TableCell>
                    )
                  ) : null
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
