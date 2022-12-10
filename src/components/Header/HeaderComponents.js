import styled from "styled-components";

export const HeaderC = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px; 
    background-color: white;
`

export const LogoCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Logo = styled.img`
    margin-right: 15px; 
    width: 30px; 
`

export const LogoText = styled.span`
    font-size: 22px;
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
`

export const LogoutExitIcon = styled.img`
    background-color: white;
`

export const LogoutExitName = styled.h3`
    font-family: "Circe";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #BDBDBD;
`

export const LogoutExit = styled.span`
    position: absolute;
    color: transparent;
`

