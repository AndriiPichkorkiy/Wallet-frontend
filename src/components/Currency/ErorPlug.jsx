import React, { useContext } from 'react'
import { MoonLoader } from "react-spinners";
import { ThemeContext } from 'styled-components';
import { Wrapper } from '../Loader/Loader.styled';

const ErrorPlug = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <>
            <tr>
                <td>USD</td>
                <td><Wrapper><MoonLoader color={themeContext.colors.moonLoaderColor} size={20} /></Wrapper></td>
                <td><Wrapper><MoonLoader color={themeContext.colors.moonLoaderColor} size={20} /></Wrapper></td>
            </tr>
            <tr>
                <td>EUR</td>
                <td><Wrapper><MoonLoader color={themeContext.colors.moonLoaderColor} size={20} /></Wrapper></td>
                <td><Wrapper><MoonLoader color={themeContext.colors.moonLoaderColor} size={20} /></Wrapper></td>
            </tr>
            <tr>
                <td>PLN</td>
                <td><Wrapper><MoonLoader color={themeContext.colors.moonLoaderColor} size={20} /></Wrapper></td>
                <td><Wrapper><MoonLoader color={themeContext.colors.moonLoaderColor} size={20} /></Wrapper></td>
            </tr>
        </>
    )
}


export default ErrorPlug;