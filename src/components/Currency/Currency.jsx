import React from 'react';
import { useState, useEffect } from 'react';
import { getMonoCurrency } from "../../api/services";
// import Loader from '../Loader/Loader';
import currencyImg from "../../assets/images/authImg/CurrencyVector.png"
import { TableWrapper, TableCurrency, ImgCurrency, TableHeader, TableHeaderCell, TableBody } from './Currency.styled';
import { default as data } from './CurrencyData';



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

                // const result = await getMonoCurrency();
                const result = data
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
    }, [setState])


    const { items, loading, error } = state;


    const element = items.filter(({ currencyCodeA, currencyCodeB }) => currencyCodeA === 840 || (currencyCodeA === 978 && currencyCodeB === 980) || currencyCodeA === 985)



    // const curr = element.forEach((post, i, arr) => {
    //     console.log("post: ", arr);
    //     if (post.currencyCodeA === 840) {
    //         return post.currencyCodeA = "USD"
    //     }
    //     if (post.currencyCodeA === 978) {
    //         return post.currencyCodeA = "EUR"
    //     }
    //     if (post.currencyCodeA === 985) {
    //         return post.currencyCodeA = "PLZ"
    //     }
    // })


    // post.currencyCodeA === 840 ? post.currencyCodeA = "USD" : post.currencyCodeA = post.currencyCodeA)
    // && (post.currencyCodeA === 978 ? post.currencyCodeA = "EUR" : post.currencyCodeA = post.currencyCodeA)
    // && (post.currencyCodeA === 985 ? post.currencyCodeA = "PLZ" : post.currencyCodeA = post.currencyCodeA)



    const el = element.map(({ currencyCodeA, rateBuy, rateSell, rateCross }) =>
        <tr key={currencyCodeA}>
            <td>{currencyCodeA === 840 ? currencyCodeA = "USD" : currencyCodeA = currencyCodeA
                && (currencyCodeA === 978 ? currencyCodeA = "EUR" : currencyCodeA = currencyCodeA)
                && (currencyCodeA === 985 ? currencyCodeA = "PLZ" : currencyCodeA = currencyCodeA)}
            </td>
            <td>{rateBuy || rateCross.toFixed(2)}</td>
            <td>{rateSell || rateCross.toFixed(2)}</td>
        </tr>
    );

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
                    {el}
                    {/* <tr><td>EUR</td><td>42.20</td><td>42.50</td>
                    </tr>
                    <tr><td>EUR</td><td>42.20</td><td>42.50</td>
                    </tr>
                    <tr><td>EUR</td><td>42.20</td><td>42.50</td>
                    </tr> */}

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
