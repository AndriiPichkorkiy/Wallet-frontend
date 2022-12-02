import React from 'react'
import HomeTabl from '../../components/HomeTabl'
// import style from './Dashboard.scss'

function createData(id, date, type, category, comment, sum, balance) {
  return { id, date, type, category, comment, sum, balance }
}

const data = [
  createData('1', '01.05.2020', '-', 'Regular Income', 'eat', 300.0, 6900.0),
  createData(
    '2',
    '02.05.2020',
    '+',
    'Other',
    'Gift for you wife hohoho',
    900.0,
    6900.0
  ),
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

const DashboardPage = () => {
  return <HomeTabl data={data} />
}

export default DashboardPage
