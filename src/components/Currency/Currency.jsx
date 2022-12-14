import React from 'react'
import { useGetCurrencyQuery } from '../../redux/Curency/currencySlice'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'
import currencyImg from '../../assets/images/authImg/CurrencyVector.png'
import {
  TableWrapper,
  TableCurrency,
  ImgCurrency,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableLoader
} from './Currency.styled'

const MonoCurrency = () => {
  const { data, isLoading, startedTimeStamp, refetch } = useGetCurrencyQuery()
  const newDate = new Date().getTime()
  const delta = 300000

  useEffect(() => {
    const loadData = async () => {
      const difference = newDate - startedTimeStamp
      if (difference > delta) {
        refetch()
        // console.log("data refetch")
      } else {
        // console.log("does not require updates")
        return data
      }
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (!data) return <></>
  const dataMono = data
    .filter(
      ({ currencyCodeA, currencyCodeB }) =>
        currencyCodeA === 840 ||
        (currencyCodeA === 978 && currencyCodeB === 980) ||
        currencyCodeA === 985
    )
    .map(({ currencyCodeA, rateBuy, rateSell, rateCross }) => (
      <tr key={currencyCodeA}>
        <td>
          {currencyCodeA === 840
            ? (currencyCodeA = 'USD')
            : (currencyCodeA =
                currencyCodeA &&
                (currencyCodeA === 978
                  ? (currencyCodeA = 'EUR')
                  : currencyCodeA) &&
                (currencyCodeA === 985
                  ? (currencyCodeA = 'PLN')
                  : currencyCodeA))}
        </td>
        <td>{(rateBuy || rateCross).toFixed(2)}</td>
        <td>{(rateSell || rateCross).toFixed(2)}</td>
      </tr>
    ))

  return (
    <TableWrapper>
      <TableCurrency>
        <TableHeader>
          <tr>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Purchase</TableHeaderCell>
            <TableHeaderCell>Sale</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {dataMono}
          <tr>
            <td>
              <ImgCurrency src={currencyImg} alt='img' />
            </td>
          </tr>
        </TableBody>
      </TableCurrency>
      <TableLoader>{isLoading && <Loader />}</TableLoader>
    </TableWrapper>
  )
}

export default MonoCurrency
