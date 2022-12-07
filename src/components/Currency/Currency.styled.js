import styled from 'styled-components'

export const TableWrapper = styled.div`
    width: 100%;
    width: 280px;
    height: 174px;
    border-radius: 30px;
    overflow: hidden;
    @media screen and (min-width: 768px) {
        width: 336px;
        height: 182px;
}
@media screen and (min-width: 1280px) {
        width: 393px;
        height: 331px;
}
`


export const TableCurrency = styled.table`
    background: #4A56E2;
    text-align: center;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    font-family: arial;
    width: 280px;
    height: 174px;
    background: #4A56E2;
    border-radius: 30px;
    overflow: hidden;
    
    @media screen and (min-width: 768px) {
        width: 336px;
        height: 182px;
}
@media screen and (min-width: 1280px) {
        width: 393px;
        height: 331px;
}
`

export const ImgCurrency = styled.img`
    width: 280px;
    height: 93px;
    left: 0;
    bottom: 0;
    position: absolute;
}
@media screen and (min-width: 768px) {
        width: 336px;
        height: 119px;
}
@media screen and (min-width: 1280px) {
        bottom: 0px;
        width: 393px;
        height: 134px;
}
`

export const TableHeader = styled.thead`
background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0.2) 116.22%);
color: white;
`

export const TableHeaderCell = styled.th`
padding: 11px 17px 12px 20px;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;

    @media screen and (min-width: 768px) {
        padding: 11px 25px 12px 20px;
}

@media screen and (min-width: 1280px) {
        padding: 17px 64px 16px 44px;
}
`

export const TableBodyCell = styled.tbody`
position: relative;
`

export const TableBody = styled.tbody`
position: relative;
width: 100%;
padding: 0;
margin: 0%;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #fff;

@media screen and (min-width: 1280px) {
        height: 120px;
        :first-of-type td {
            height: 0px;
            padding-top: 20px;
            padding: 0px;
        }
    
}
`

export const TableLoader = styled.tr`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:#FFFFFF;

`



