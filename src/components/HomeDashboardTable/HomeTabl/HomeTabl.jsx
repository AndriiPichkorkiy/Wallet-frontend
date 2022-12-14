import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import {
  ContainerTable,
  EmptyContainer,
  StyledGridOverlay
} from './HomeTabl.styled'
import EllipsisText from 'react-ellipsis-text'

const HomeTabl = ({ transactions, quantity, functionChangePage }) => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  const [rowCountState, setRowCountState] = useState(quantity || 0)
  React.useEffect(() => {
    setRowCountState(prevRowCountState =>
      quantity !== undefined ? quantity : prevRowCountState
    )
  }, [quantity, setRowCountState])

  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      headerAlign: 'center',
      type: 'date',
      align: 'center',
      flex: 1,
      hideable: false,
      hideSortIcons: true,
      renderCell: ({ row: { date } }) => {
        const time = date
        const newDate = new Date(time).toLocaleDateString()
        return <Typography>{newDate}</Typography>
      }
    },
    {
      field: 'type',
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center',
      hideable: false,
      hideSortIcons: true,
      flex: 0.7,
      renderCell: ({ row: { type } }) => (
        <Typography>{type ? '+' : '-'}</Typography>
      )
    },

    {
      field: 'category',
      headerName: 'Category',
      flex: 1.1,
      headerAlign: 'center',
      align: 'left',
      hideSortIcons: true,
      hideable: false,
      type: 'singleSelect',
      valueOptions: ['name'],
      renderCell: ({ row: { category } }) => (
        <Typography>{category.name}</Typography>
      )
    },
    {
      field: 'comment',
      headerName: 'Comment',
      headerAlign: 'center',
      align: 'left',
      flex: 1,
      hideSortIcons: true,
      hideable: false,
      renderCell: ({ row: { comment } }) => (
        <EllipsisText text={comment} length={15} />
      )
    },
    {
      field: 'amount',
      headerName: 'Sum',
      headerAlign: 'center',
      align: 'right',
      hideable: false,
      hideSortIcons: true,
      flex: 1,
      renderCell: ({ row: { amount, type } }) => (
        <Typography
          sx={{ pr: '20px' }}
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
      hideable: false,
      hideSortIcons: true,
      flex: 1,
      renderCell: ({ row: { balance } }) => (
        <Typography sx={{ pr: '20px' }}>{balance.toFixed(2)}</Typography>
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
      <ContainerTable>
        <Box
          height='70vh'
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
            '& .MuiDataGrid-columnHeaderDraggableContainer': {
              width: 'fit-content !important'
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
            '& .MuiDataGrid-columnHeader:first-of-type': {
              paddingLeft: '30px'
            },
            '.MuiDataGrid-columnHeader:nth-of-type(5)': {
              paddingLeft: '30px'
            },
            '& .MuiDataGrid-root .MuiDataGrid-columnHeader .MuiDataGrid-cell':
              {},
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: '700',
              paddingRight: '10px'
            },
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
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '30px'
            },
            '& .MuiIconButton-root': {
              color: 'var(--paleActiveColor)'
            },
            '& .Mui-disabled': { color: 'var(--text-header)' },
            '& .MuiIconButton-root:hover': {
              color: 'var(--activeColor)'
            },
            '& .MuiDataGrid-menuIconButton': { visibility: 'visible' },
            '& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus':
              {
                outline: 'none !important',
                outlineOffset: '0'
              },
            '& .MuiDataGrid-selectedRowCount': { visibility: 'hidden' }
          }}
        >
          <DataGrid
            components={{
              NoRowsOverlay: CustomNoRowsOverlay
            }}
            {...transactions}
            rows={transactions ?? []}
            rowCount={rowCountState}
            columns={columns}
            getRowId={row => row._id}
            page={page}
            pageSize={pageSize}
            onPageChange={newPage => {
              setPage(newPage)
              functionChangePage(newPage)
            }}
            onPageSizeChange={newPageSize => {
              setPageSize(newPageSize)
            }}
            rowsPerPageOptions={[5, 10]}
            pagination
            paginationMode='server'
          />
        </Box>
      </ContainerTable>
      <EmptyContainer />
    </>
  )
}

export default HomeTabl
