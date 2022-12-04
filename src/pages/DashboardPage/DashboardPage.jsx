import React from 'react'
import Media from 'react-media'
import DashbordBtns from '../../components/DashbordBtns/DashbordBtns'
import Header from '../../components/Header/Header'
import HomeTabl from '../../components/HomeTabl'
import MobileTabl from '../../components/MobileTabl'

function createData(id, date, type, category, comment, sum, balance) {
  return { id, date, type, category, comment, sum, balance }
}
let data = []

let result = []
if (result.length > 0) {
  data = [
    createData('1', '01.12.2022', true, 'Other', 'food', 1500.0, 6900.0),
    createData(
      '2',
      '02.12.2022',
      true,
      'Other',
      'Gift for your wife',
      250.0,
      6900.0
    ),
    createData('3', '03.12.2022', false, 'Other', 'food', 1500.0, 6900.0),
    createData(
      '4',
      '04.12.2022',
      true,
      'Regular Income',
      'sport',
      250.0,
      6900.0
    ),
    createData('5', '05.12.2022', false, 'Other', 'gift', 3000.0, 6900.0),
    createData('6', '06.12.2022', false, 'Other', 'eat', 300.0, 6900.0),
    createData(
      '7',
      '07.12.2022',
      true,
      'Regular Income',
      'salary',
      900.0,
      6900.0
    ),
    createData('8', '08.12.2022', true, 'Other', 'food', 1500.0, 6900.0),
    createData('9', '09.12.2022', false, 'Other', 'sport', 250.0, 6900.0),
    createData('10', '10.12.2022', false, 'Other', 'gift', 3000.0, 6900.0),
    createData('11', '11.12.2022', true, 'Other', 'gift', 3000.0, 6900.0),
    createData('12', '12.12.2022', true, 'Other', 'eat', 300.0, 6900.0),
    createData('13', '12.12.2022', false, 'Other', 'salary', 900.0, 6900.0),
    createData('14', '13.12.2022', true, 'Other', 'food', 1500.0, 6900.0),
    createData('15', '14.12.2022', false, 'Other', 'sport', 250.0, 6900.0),
    createData('16', '15.12.2022', true, 'Other', 'gift', 3000.0, 6900.0),
  ]
}

const DashboardPage = () => {
  return (
    <>
      <Header />
      <DashbordBtns />
      {data ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            matches.small ? (
              <MobileTabl data={data} />
            ) : (
              <HomeTabl data={data} />
            )
          }
        </Media>
      ) : null}
    </>
  )
}

export default DashboardPage
