import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'

const HomeTabl = ({ data }) => {
  const [pageSize, setPageSize] = useState(5)
  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },

    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
      cellCalssName: 'name-column--cell',
    },
    {
      field: 'comment',
      headerName: 'Comment',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'sum',
      headerName: 'Sum',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { sum, type } }) => (
        <Typography color={type === '+' ? '#ff6596' : '#24cca7'}>
          {sum}
        </Typography>
      ),
    },
    {
      field: 'balance',
      headerName: 'Balance',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
    },
  ]

  return (
    <Box m='46px 16px 0 70px'>
      <Box
        height='80vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            fontFamily: 'Circe',
            fontSize: '18px',
            // width: '705px',
            color: '#000000',
          },
          '& .MuiDataGrid-cell': {
            borderTop: 'none',
            paddingLeft: '30px',
            borderBottom: '1px solid #DCDCDF',
            boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.6)',
            fontSize: '16px',
          },
          '& .MuiDataGrid-cellContent': { whiteSpace: 'normal' },
          '& .MuiDataGrid-columnHeaderTitle': { fontWeight: '700' },
          '& .MuiDataGrid-columnSeparator .MuiDataGrid-iconSeparator': {
            color: 'transparent',
          },

          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#ffffff',
            borderRadius: '30px',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '30px',
          },
          '& .MuiIconButton-root': {
            color: 'rgba(255, 0, 0, 0.6)',
          },
          '& .MuiIconButton-root:hover': {
            backgroundColor: 'rgba(255, 255, 0, 0.6)',
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          {...data}
          //   scrollbarSize={2}
        />
      </Box>
    </Box>
  )
}

export default HomeTabl
