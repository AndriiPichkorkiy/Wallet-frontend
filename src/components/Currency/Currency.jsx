import React from 'react';
import { useState, useEffect } from 'react';
import { getCurrency } from "../../api/services";
import css from './Currency.module.css';
// import Loader from '../Loader/Loader';
import currencyImg from "../../assets/images/authImg/CurrencyVector.png"



const Currency = () => {
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

                const result = await getCurrency();
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
    //             {/* <td className={css.tableBody}>{currencyCodeA}</td>
    //             <td className={css.tableBody}>{rateBuy || rateCross}</td>
    //             <td className={css.tableBody}>{rateSell || rateCross}</td> */}
    //         </tr>
    //     );



    return (
        <div className={css.tableWrapper}>
            <table className={css.tableCurrency}>
                <thead className={css.tableHeader}>
                    <tr>
                        <th className={css.tableHead}>Currency</th>
                        <th className={css.tableHead}>Purchase</th>
                        <th className={css.tableHead}>Sale</th>
                    </tr>
                </thead>
                <tbody className={css.tableBody}>
                    {/* {element} */}
                    <tr><td className={css.tableBody}>EUR</td><td className={css.tableBody}>42.20</td><td className={css.tableBody}>42.50</td>
                    </tr>
                    <tr><td className={css.tableBody}>EUR</td><td className={css.tableBody}>42.20</td><td className={css.tableBody}>42.50</td>
                    </tr>
                    <tr><td className={css.tableBody}>EUR</td><td className={css.tableBody}>42.20</td><td className={css.tableBody}>42.50</td>
                    </tr>

                    <tr>
                        <td><img className={css.currencyImg} src={currencyImg} alt="img" /></td>
                    </tr>
                    {/* <tr><td>{loading && <Loader />}</td></tr> */}
                </tbody>
            </table >

        </div >
    )

};

export default Currency;
