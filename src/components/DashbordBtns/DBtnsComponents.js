import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo.js'

export const BtnsCont = styled.div`
  display: flex;
  max-width: 480px;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  ${respondTo.sm`
        align-items: start;
        flex-direction: column;
    `}
`

export const Container = styled.div`
  padding: 12px 0;
  width: 100%;
  display: flex;
  ${respondTo.sm` 
        max-width: 125px;
        padding: 0;
    `}
`

export const LinkBtn = styled(NavLink)`
  position: relative;
  margin-right: 32px;
  text-decoration: none;
  height: 44px;
  &.active {
    & > svg {
      background: var(--activeColor);
    }
  }
  ${respondTo.sm`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 0px;
        font-weight: 400;
        height: 100%;
        font-size: 18px;
        line-height: 27px;
        &.active {
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
        }
    `}
`

export const CurrLinkBtn = styled(NavLink)`
  position: relative;
  width: 44px;
  height: 44px;
  &.active {
    &.active {
      & > svg {
        background: var(--activeColor);
      }
    }
  }
  ${respondTo.sm`
        position: absolute;
        visibility: hidden;
    `}
`

export const NewsLinkBtn = styled(NavLink)`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  visibility: hidden;
  text-decoration: none;
  &.active {
    & > svg {
      background: var(--activeColor);
    }
  }
  ${respondTo.sm`
        margin-left: 60px;
        position: relative;
        width: 100%;
        height: 100%;
        opacity: 1;
        visibility: visible;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 0px;
        font-weight: 400;
        font-size: 24px;
        &.active {
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
            font-weight: 700;
        }
    `}
`

export const BtnText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  visibility: hidden;
  ${respondTo.sm`
        position: relative;
        width: 100%;
        height:100%;
        opacity: 1;
        pointer-events: 1;
        visibility: visible;
        margin-left: 20px;
        color: var(--main-text);
    `}
`

export const NewsBtnText = styled.span`
  ${respondTo.sm`
        margin-left: 10px;
        color: var(--main-text);
    `}
`

