import { Box } from '@mui/material';
import { Promotion } from '../types/apiTypes';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
  promotions: Promotion[]
}

const columns: GridColDef<Promotion>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'message',
    headerName: 'Message',
    flex: 1,
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    valueGetter: (_, row) => row.date.toISOString().slice(0, 10)
  },
];

function PromotionHistoryTable({ promotions }: Props) {

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
        rows={promotions}
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
        hideFooter
      />
    </Box>
  );
}

export default PromotionHistoryTable;
