import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { id: 1, message: 'Summer Sale 50% Off!', date: '2024-06-29' },
  { id: 2, message: 'Buy One Get One Free!', date: '2024-06-28' },
];

function PromotionHistoryTable() {
  return (
    <Paper className="bg-primary-100">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="text-white">Message</TableCell>
            <TableCell className="text-white">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='overflow-y-scroll'>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell className="text-white">{row.message}</TableCell>
              <TableCell className="text-white">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default PromotionHistoryTable;
