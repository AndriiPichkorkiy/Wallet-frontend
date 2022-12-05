import styled from "styled-components";
import { respondTo } from "../../helpers/respondTo";

export const HeaderC = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px; 
    background-color: white;
    ${respondTo.xs`
        padding: 20px 32px;
    `}
    ${respondTo.sm`
        padding: 16px 20px;
    `}
`

export const LogoCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Logo = styled.img`
    margin-right: 15px; 
    width: 30px;
    ${respondTo.xs`
        width: 40px;
        margin-right: 20px;
    `}
`

export const LogoText = styled.span`
    font-size: 22px;
    ${respondTo.xs`
        font-size: 36px;
    `}
`

export const LogoutCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #BDBDBD;
`

export const BtnLogout = styled.button`
    padding: 0;
    margin-left: 8px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover, &:focus {
        &>svg, &>span {
            color: #4A56E2;
        }
    }
    ${respondTo.xs`
        border-left: 1px #BDBDBD solid;
        padding-left: 12px;
        
    `}
`


export const LogoutExitName = styled.h3`
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #BDBDBD;
`

export const LogoutExit = styled.span`
    position: absolute;
    color: transparent;
    ${respondTo.xs`
        color: #BDBDBD;
        padding-top: 3px;
        margin-left: 8px;
        position: relative;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;  
    `}
`

