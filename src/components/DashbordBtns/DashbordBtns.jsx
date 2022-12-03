import React from 'react'
import { BtnsCont, Container, LinkBtn } from './DBtnsComponents';
import SvgIcon from '../SVGIcon/SVGIcon'
const DashbordBtns = () => {
    return (
        <Container>
            <BtnsCont>
                <LinkBtn to='/home'>
                    {/* <img src={home} alt="" /> */}
                    <SvgIcon name={'homeicon'} width={"44px"} height={"44px"}/>
                </LinkBtn>
                <LinkBtn to='/statistics'>
                    {/* <img src={stat} alt="" /> */}
                    <SvgIcon name={'statisticsicon'} width={"44px"} height={"44px"}/>
                </LinkBtn>
                <LinkBtn to='/currency'>
                    <SvgIcon name={'currencyicon'} width={"44px"} height={"44px"}/>
                </LinkBtn>
            </BtnsCont>
        </Container>
  )
}

export default DashbordBtns