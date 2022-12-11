import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import {
  ContainerTabl,
  EmptyContainer,
  StyledGridOverlay
} from './HomeTabl.styled'
import EllipsisText from 'react-ellipsis-text'

const HomeTabl = ({ data }) => {
  const [pageSize, setPageSize] = useState(10)
  console.log(data)

  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      headerAlign: 'center',
      type: 'date',
      renderCell: ({ row: { date } }) => {
        const time = date
        const newDate = new Date(time).toLocaleDateString()
        return <Typography>{newDate}</Typography>
      },
      align: 'center',
      flex: 1
    },
    {
      field: 'type',
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center',
      flex: 0.7,
      renderCell: ({ row: { type } }) => (
        <Typography>{type ? '+' : '-'}</Typography>
      )
    },

    {
      field: 'category',
      headerName: 'Category',
      flex: 1.1,
      headerAlign: 'left',
      align: 'left',
      type: 'singleSelect',
      valueOptions: ['id', 'name'],
      renderCell: ({ row: { category } }) => (
        <Typography>{category.name}</Typography>
      )
    },
    {
      field: 'comment',
      headerName: 'Comment',
      headerAlign: 'left',
      align: 'left',
      flex: 1.1,
      renderCell: ({ row: { comment } }) => (
        <EllipsisText text={comment} length={20} />
      )
    },
    {
      field: 'amount',
      headerName: 'Sum',
      headerAlign: 'center',
      align: 'right',
      flex: 1.1,
      renderCell: ({ row: { amount, type } }) => (
        <Typography
          sx={{ pr: '15px' }}
          color={type ? 'var(--accentPrimary)' : 'var(--accentSecondary)'}
        >
          {amount.toFixed(2)}
        </Typography>
      )
    },
    {
      field: 'balance',
      headerName: 'Balance',
      headerAlign: 'center',
      align: 'right',
      flex: 1,
      renderCell: ({ row: { balance } }) => (
        <Typography sx={{ pr: '15px' }}>{balance.toFixed(2)}</Typography>
      )
    }
  ]

  function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <Typography
          sx={{
            width: '600px',
            textAlign: 'center',
            fontSize: '24px !important',
            lineHeight: '1.5'
          }}
        >
          There are no recorded transactions. Click the{' '}
          <span style={{ color: 'var(--accentPrimary' }}>green button</span> in
          the lower right corner ↓ and make the first entry!
        </Typography>
      </StyledGridOverlay>
    )
  }

  return (
    <>
      <ContainerTabl>
        <Box
          height='80vh'
          sx={{
            '& .MuiTypography-root': {
              fontFamily: 'Circe',
              fontSize: '16px',
              lineHeight: '1.5',
              whiteSpace: 'normal'
            },

            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: 'transparent',
              width: '6px',
              height: '6px'
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: 'rgba(36,204,167, 0.6)'
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor: 'var(--accentPrimary)'
              },
            '& .MuiDataGrid-root': {
              border: 'none',
              fontFamily: 'Circe',
              fontSize: '18px',
              lineHeight: '1.5',
              color: 'var(--main-text)'
            },
            '& .MuiDataGrid-cell': {
              borderTop: 'none',
              borderBottom: '1px solid #DCDCDF',
              boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.6)',
              fontSize: '16px',
              lineHeight: '1.5',
              whiteSpace: 'normal'
            },
            '& .MuiDataGrid-cellContent': {
              whiteSpace: 'normal'
            },
            '& .MuiDataGrid-columnHeaderTitle': { fontWeight: '700' },
            '& .MuiDataGrid-columnSeparator .MuiDataGrid-iconSeparator': {
              color: 'transparent'
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'var(--background)',
              borderRadius: '30px'
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: 'transparent'
            },
            '& .MuiDataGrid-footerContainer': {
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '30px'
            },
            '& .MuiIconButton-root': {
              color: 'var(--paleActiveColor)'
            },
            '& .Mui-disabled': { color: 'var(--text-header)' },
            '& .MuiIconButton-root:hover': {
              color: 'var(--activeColor)'
            },
            '& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus':
              {
                outline: 'none !important',
                outlineOffset: '0'
              }
          }}
        >
          <DataGrid
            components={{
              NoRowsOverlay: CustomNoRowsOverlay
            }}
            rows={data ?? []}
            columns={columns}
            getRowId={row => row._id}
            pageSize={pageSize}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            {...data}
          />
        </Box>
      </ContainerTabl>
      <EmptyContainer />
    </>
  )
}

export default HomeTabl
