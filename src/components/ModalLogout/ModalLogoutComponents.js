import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.25);
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
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;
    border-radius: 20px;
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
    color: #4A56E2;
    border: 1px #4A56E2 solid;
    margin-right: 10px;
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
    background-color: #24CCA7;
    color: white;
`
