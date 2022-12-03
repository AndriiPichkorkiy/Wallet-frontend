import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SVGIcon from '../SVGIcon/SVGIcon.jsx'

export const BtnsCont = styled.div`
    display: flex;
    max-width: 480px;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
`

export const Container = styled.div`
    padding: 12px 0;
    width: 100%;
    display: flex;
`

export const LinkBtn = styled(NavLink)`
    fill: #6e78e8;
    :not(:last-child) {
        margin-right: 32px;
    }
    &.active {
        fill: #4A56E2;
    }
`

// export const SvgBtnDashbord = styled(SVGIcon)`
//     width: 44px;
//     height: 44px;
//     :hover {
//         stroke: black;
//     }
// `