import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'points',
    headerName: 'Points Earned Today',
    type: 'number',
    // minWidth: 250,
    align: 'right'
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', points: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', points: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', points: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', points: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', points: 69 },
  { id: 6, lastName: 'Melisandre', firstName: null, points: 420 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', points: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', points: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', points: 65 },
];

export default function DataGridDemo() {
  return (
    <Box className="text-white" sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        sx={{
          '& .MuiDataGrid-cell': {
            color: "white"
          },
          '& .MuiDataGrid-footerContainer': {
            color: "white"
          },
          '& .MuiTablePagination-displayedRows': {
            color: "white"
          },
          '& .MuiDataGrid-footerContainer .MuiSvgIcon-root': {
            color: "white"
          },
          '& .MuiDataGrid-topContainer': {
            backgroundColor: "#FF5000",
          }
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        rowSelection={false}
        hideFooterSelectedRowCount
        pageSizeOptions={[7]}
      />
    </Box>
  );
}