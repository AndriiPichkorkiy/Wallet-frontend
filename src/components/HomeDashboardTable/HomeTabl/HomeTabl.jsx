import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import {
  ContainerTable,
  EmptyContainer,
  StyledGridOverlay
} from './HomeTabl.styled'
import EllipsisText from 'react-ellipsis-text'
import { useGetAllTransactionsQuery } from '../../../services/transactionsApi'

const HomeTabl = () => {
  const { data } = useGetAllTransactionsQuery()
  //   console.log(data)
  const [pageSize, setPageSize] = useState(10)
  //   const [boxSize, setBoxSize] = useState(500)

  //   const getBox = () => {
  //     const box = document.querySelector('.MuiDataGrid-virtualScrollerRenderZone')
  //     return box
  //   }

  //   useEffect(() => {
  //     if (data.length === 0) {
  //       return
  //     }
  //     setTimeout(() => {
  //       const newBox = getBox()
  //       setBoxSize(newBox.clientHeight + 108)
  //     }, 100)
  //   }, [data, boxSize, pageSize])

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
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   width: 180,
  //   sortable: false,
  //   disableClickEventBubbling: true,

  //   renderCell: params => {
  //     const onClick = e => {
  //       const currentRow = params.row
  //       return alert(JSON.stringify(currentRow, null, 4))
  //     }
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
          height='60vh'
          //   height={boxSize}
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
              width: '80% !important'
            },
            '& .MuiDataGrid-root': {
              border: 'none',
              fontFamily: 'Circe',
              fontSize: '18px',
              lineHeight: '1.5',
              color: 'var(--main-text)'
              //   paddingRight: '20px'
            },
            '& .MuiDataGrid-cell': {
              borderTop: 'none',
              borderBottom: '1px solid #DCDCDF',
              boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.6)',
              fontSize: '16px',
              lineHeight: '1.5',
              whiteSpace: 'normal'
              //   paddingRight: '20px'
            },
            '& .MuiDataGrid-cellContent': {
              whiteSpace: 'normal'
            },
            '& .MuiDataGrid-root .MuiDataGrid-columnHeader .MuiDataGrid-cell': {
              //   paddingRight: '20px'
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
            rows={data ?? []}
            columns={columns}
            getRowId={row => row._id}
            pageSize={pageSize}
            onPageSizeChange={newPageSize => {
              setPageSize(newPageSize)
            }}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            {...data}
          />
        </Box>
      </ContainerTable>
      <EmptyContainer />
    </>
  )
}

export default HomeTabl
