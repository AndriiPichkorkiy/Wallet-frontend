import React from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
// import style from './Dashboard.scss'

function createData(id, date, type, category, comment, sum, balance) {
  return { id, date, type, category, comment, sum, balance }
}

const data = [
  createData('1', '01.05.2020', '-', 'Other', 'eat', 300.0, 6900.0),
  createData('2', '02.05.2020', '+', 'Other', 'salary', 900.0, 6900.0),
  createData('3', '03.05.2020', '-', 'Other', 'food', 1500.0, 6900.0),
  createData('4', '04.05.2020', '+', 'Other', 'sport', 250.0, 6900.0),
  createData('5', '05.05.2020', '-', 'Other', 'gift', 3000.0, 6900.0),
  createData('6', '06.05.2020', '-', 'Other', 'eat', 300.0, 6900.0),
  createData('7', '07.05.2020', '+', 'Other', 'salary', 900.0, 6900.0),
  createData('8', '08.05.2020', '-', 'Other', 'food', 1500.0, 6900.0),
  createData('9', '09.05.2020', '+', 'Other', 'sport', 250.0, 6900.0),
  createData('10', '10.05.2020', '-', 'Other', 'gift', 3000.0, 6900.0),
  createData('11', '11.05.2020', '-', 'Other', 'gift', 3000.0, 6900.0),
  createData('12', '12.05.2020', '-', 'Other', 'eat', 300.0, 6900.0),
  createData('13', '12.05.2020', '+', 'Other', 'salary', 900.0, 6900.0),
  createData('14', '13.05.2020', '-', 'Other', 'food', 1500.0, 6900.0),
  createData('15', '14.05.2020', '+', 'Other', 'sport', 250.0, 6900.0),
  createData('16', '15.05.2020', '-', 'Other', 'gift', 3000.0, 6900.0),
]
// const data = [
//   {
//     id: '1',
//     date: '01.05.2020',
//     type: '-',
//     category: 'Other',
//     comment: 'eat',
//     sum: 300.0,
//     balance: 6900.0,
//   },
//   {
//     id: '2',
//     date: '01.05.2020',
//     type: '-',
//     category: 'Other',
//     comment: 'eat',
//     sum: 300.0,
//     balance: 6900.0,
//   },
// ]
const DashboardPage = () => {
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
    <Box m='20px'>
      <Box
        m='30px 0 0 0'
        height='100vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            fontFamily: 'Circe',
            fontSize: '18px',
            width: '705px',
            color: '#000000',
          },
          '& .MuiDataGrid-cell': {
            borderTop: 'none',
            paddingLeft: '30px',
            borderBottom: '1px solid #DCDCDF',
            boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.6)',
            fontWeight: '400',
            fontSize: '16px',
          },
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
          '& .MuiTablePagination-selectLabel': {
            fontFamily: 'Circe',
            fontWeight: '400',
            fontSize: '16px',
          },
          '& .MuiTablePagination-displayedRows': {
            fontFamily: 'Circe',
            fontWeight: '400',
            fontSize: '16px',
          },
          '& .MuiInputBase-root': {
            fontFamily: 'Circe',
            fontWeight: '400',
            fontSize: '16px',
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
        />
      </Box>
    </Box>
  )
}

export default DashboardPage
