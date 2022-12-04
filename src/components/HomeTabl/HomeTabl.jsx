import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { ContainerTabl, StyledGridOverlay } from './HomeTabl.styled'

const HomeTabl = ({ data }) => {
  const [pageSize, setPageSize] = useState(10)
  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      headerAlign: 'center',
      type: 'date',
      align: 'center',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { type } }) => (
        <Typography>{type ? '+' : '-'}</Typography>
      ),
    },

    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
      //   cellCalssName: 'name-column--cell',
    },
    {
      field: 'comment',
      headerName: 'Comment',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'sum',
      headerName: 'Sum',
      headerAlign: 'center',
      //   type: 'number',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { sum, type } }) => (
        <Typography
          color={type ? 'var(--accentPrimary)' : 'var(--accentSecondary)'}
        >
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

  function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <Box
          sx={{
            mt: 1,
            width: '500px',
            textAlign: 'center',
            fontFamily: 'Circe',
            fontSize: '18px',
            lineHeight: '1.474',
          }}
        >
          There are no recorded transactions. Click the green button in the
          lower right corner and make the first entry!
        </Box>
      </StyledGridOverlay>
    )
  }

  return (
    <ContainerTabl>
      <Box
        height='80vh'
        sx={{
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: 'rgba(36,204,167, 0.6)',
          },
          //   '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
          //     {
          //       backgroundColor: '#959595',
          //     },
          //   '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
          //     {
          //       backgroundColor: '#959595',
          //     },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: 'var(--accentPrimary)',
            },
          //   '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
          //     backgroundColor: '#24CCA7',
          //   },
          '& .MuiDataGrid-root': {
            border: 'none',
            fontFamily: 'Circe',
            fontSize: '18px',
            lineHeight: '1.474',
            color: 'var(--main-text)',
          },
          '& .MuiDataGrid-cell': {
            borderTop: 'none',
            borderBottom: '1px solid #DCDCDF',
            boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.6)',
            fontSize: '16px',
            lineHeight: '1.125',
          },
          '& .MuiDataGrid-cellContent': { whiteSpace: 'normal' },
          '& .MuiDataGrid-columnHeaderTitle': { fontWeight: '700' },
          '& .MuiDataGrid-columnSeparator .MuiDataGrid-iconSeparator': {
            color: 'transparent',
          },

          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'var(--background)',
            borderRadius: '30px',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-footerContainer': {
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '30px',
          },
          '& .MuiIconButton-root': {
            color: 'var(--paleActiveColor)',
          },
          '& .Mui-disabled': { color: 'var(--text-header)' },
          '& .MuiIconButton-root:hover': {
            color: 'var(--activeColor)',
          },
          //   '& .MuiDataGrid-columnHeader:focus-within': {
          //     borderColor: 'none',
          //   },
        }}
      >
        <DataGrid
          components={{
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          {...data}
        />
      </Box>
    </ContainerTabl>
  )
}

export default HomeTabl
