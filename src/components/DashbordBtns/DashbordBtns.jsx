import React from 'react'
import { BtnsCont, BtnText, Container, CurrLinkBtn, LinkBtn } from './DBtnsComponents';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styled from 'styled-components';
import { respondTo } from '../../helpers/respondTo';
const DashbordBtns = () => {
    return (
        <Container>
            <BtnsCont>
                <LinkBtn to='/home'>
                    {/* <img src={home} alt="" /> */}
                    <DIV>
                        <IconHome
                        sx={{
                            color: '#fff',
                            background: '#6e78e8',
                            // borderRadius: "6px",
                            // width: "100%",
                            // height: "100%",
                            }}
                        />
                    </DIV>
                    
                    <BtnText>Home</BtnText>
                </LinkBtn>
                <LinkBtn to='/statistics'>
                    {/* <img src={stat} alt="" /> */}
                    <IconStat
                        sx={{
                            color: '#fff',
                            background: '#6e78e8',
                            // borderRadius: "6px",
                            // width: "44px",
                            // height: "44px"
                        }} />
                    <BtnText>Statistiscs</BtnText>
                </LinkBtn>
                <CurrLinkBtn to='/currency'>
                    <AttachMoneyIcon
                        sx={{
                            color: '#fff',
                            background: '#6e78e8',
                            borderRadius: "6px",
                            width: "44px",
                            height: "44px"
                        }}
                    />
                </CurrLinkBtn>
            </BtnsCont>
        </Container>
  )
}

const IconHome = styled(HomeSharpIcon)`
    /* color: #fff;
    background-color: #6e78e8; */
    border-radius: 6px;
    width: 44px;
    height: 44px;
    ${respondTo.sm`
        border-radius: 0px;
        width: 18px;
        height: 18px;
    `}
    & .MuiSvgIcon-root {
        width: 44px;
        height: 44px;
        ${respondTo.sm`
            width: 18px;
            height: 18px;
         `}
    }
`

const IconStat = styled(TimelineIcon)`
    /* color: #fff;
    background-color: #6e78e8; */
    border-radius: 6px;
    width: 44px;
    height: 44px;
    ${respondTo.sm`
        border-radius: 0px;
        width: 18px;
        height: 18px;
    `}
`

const DIV = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    ${respondTo.sm`
        width: 18px;
        height: 18px;
    `}
`

export default DashbordBtns