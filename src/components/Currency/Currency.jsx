import React from 'react';
import { useState, useEffect } from 'react';
import { getMonoCurrency } from "../../api/services";
// import Loader from '../Loader/Loader';
import currencyImg from "../../assets/images/authImg/CurrencyVector.png"
import { TableWrapper, TableCurrency, ImgCurrency, TableHeader, TableHeaderCell, TableBody } from './Currency.styled';



const MonoCurrency = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                setState({
                    ...state,
                    loading: true,
                    error: null,
                })

                const result = await getMonoCurrency();
                setState(prevState => {
                    return {
                        items: result,
                        loading: false,
                        error: null,
                    }
                })
            } catch (error) {
                setState({
                    ...state,
                    error,
                })
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,

                    }
                })
            }
        }
        fetchCurrency()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setState])


    // const { items, loading, error } = state;


    // const element = items.filter(({ currencyCodeA, currencyCodeB }) => currencyCodeA === 840 || (currencyCodeA === 978 && currencyCodeB === 980) || currencyCodeA === 985)
    //     .map(({ currencyCodeA, rateBuy, rateSell, rateCross }) =>
    //         <tr key={currencyCodeA}>
    //             <td className={css.tableBody}>{currencyCodeA}</td>
    //             <td className={css.tableBody}>{rateBuy || rateCross}</td>
    //             <td className={css.tableBody}>{rateSell || rateCross}</td>
    //         </tr>
    //     );



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
                    {/* {element} */}
                    <tr><td>EUR</td><td>42.20</td><td>42.50</td>
                    </tr>
                    <tr><td>EUR</td><td>42.20</td><td>42.50</td>
                    </tr>
                    <tr><td>EUR</td><td>42.20</td><td>42.50</td>
                    </tr>

                    <tr>
                        <td><ImgCurrency src={currencyImg} alt="img" /></td>
                    </tr>
                    {/* <tr><TableLoader>{loading && <Loader />}</TableLoader></tr> */}
                </TableBody>
            </TableCurrency >

        </TableWrapper >
    )

};

export default MonoCurrency;
