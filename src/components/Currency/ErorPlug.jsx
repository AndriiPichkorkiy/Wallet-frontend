import React from 'react'
import { MoonLoader } from "react-spinners";
import { Wrapper } from '../Loader/Loader.styled';

const ErrorPlug = () => {
    return (
        <>
            <tr>
                <td>USD</td>
                <td><Wrapper><MoonLoader color="#FFFFFF" size={20} /></Wrapper></td>
                <td><Wrapper><MoonLoader color="#FFFFFF" size={20} /></Wrapper></td>
            </tr>
            <tr>
                <td>EUR</td>
                <td><Wrapper><MoonLoader color="#FFFFFF" size={20} /></Wrapper></td>
                <td><Wrapper><MoonLoader color="#FFFFFF" size={20} /></Wrapper></td>
            </tr>
            <tr>
                <td>PLN</td>
                <td><Wrapper><MoonLoader color="#FFFFFF" size={20} /></Wrapper></td>
                <td><Wrapper><MoonLoader color="#FFFFFF" size={20} /></Wrapper></td>
            </tr>
        </>
    )
}


export default ErrorPlug;