import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { User } from '../types/apiTypes';

const columns: GridColDef<User>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
    valueGetter: (_, row) => row.name.firstname
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
    valueGetter: (_, row) => row.name.lastname
  },
  {
    field: 'points',
    headerName: 'Points Earned Today',
    type: 'number',
    flex: 1,
    align: 'right',
    valueGetter: () => Math.round(5 + Math.random() * 32)
  },
];

export default function DataGridDemo() {

  const [customers, setCustomers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      setLoading(false);
      setCustomers(json);
    })
  }, [])

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
          '& .MuiDataGrid-columnHeader': {
            background: "#003554",
            color: "white"
          },
          '& .MuiDataGrid-filler': {
            background: "#003554",
          },
          '& .MuiDataGrid-columnHeaders .MuiSvgIcon-root': {
            color: "white"
          }
        }}
        loading={loading}
        rows={customers}
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
        disableColumnResize
        autosizeOnMount
      />
    </Box>
  );
}
