import styled from "styled-components";
import { respondTo } from "../../helpers/respondTo";

export const Overlay = styled.div`
    background-color: var(--overlay);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1200;
` 

export const ModalCont = styled.div`
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;
    border-radius: 20px;
    ${respondTo.sm`
        padding: 20px 80px;
    `}
`

export const ModalLogoutText = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`

export const ModalLogoutButtonYes = styled.button`
    border-radius: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    padding: 5px 20px;
    box-sizing: border-box;
    max-height: 37px;
    align-items: center;
    background-color: transparent;
    color: var(--activeColor);
    border: 1px var(--activeColor) solid;
    margin-right: 10px;

    &:focus {
    background: var(--activeColor);
    color: var(--background);
    background-image: linear-gradient(315deg,  #4a56e2 0%, #ffd8d0a6 74%);
    }
    &:hover{
        box-shadow:  -2px 2px 6px 0 rgba(255,255,255,.5),
                -2px 2px 6px 0 rgba(116, 125, 139, .5), 
        inset -2px -2px 6px 0 rgba(255,255,255,.5),
        inset -2px -2px 6px 0 rgba(0, 0, 0, .4);
    }
`

export const ModalLogoutButtonNo = styled.button`
    border-radius: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    padding: 5px 20px;
    box-sizing: border-box;
    max-height: 37px;
    align-items: center;
    background-color: var(--accentPrimary);
    color: var(--background);

    &:focus {
    background-color: var(--accentPrimary);
    background-image: linear-gradient(315deg, #89d891 0%, #03c8a8 74%);
    }
    &:hover{
        box-shadow:  -2px 2px 6px 0 rgba(255,255,255,.5),
                -2px 2px 6px 0 rgba(116, 125, 139, .5), 
        inset -2px -2px 6px 0 rgba(255,255,255,.5),
        inset -2px -2px 6px 0 rgba(0, 0, 0, .4);
    }
`
