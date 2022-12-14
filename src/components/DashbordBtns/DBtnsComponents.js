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
      &:before {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        content: '';
        top: 100%;
        left: 5%;
        height: 10px;
        width: 90%;
        opacity: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 80%);
        transition-property: transform opacity;
      }
    
      &:hover, &.active{
        transform: translateY(-6px);
        animation-name: hover;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        &:before {
          opacity: .4;
          transform: translateY(6px);
          animation-name: hover-shadow;
          animation-duration: 1.5s;
          animation-delay: .3s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      }
    
    @keyframes hover {
      50% {
        transform: translateY(-3px);
      }
    
      100% {
        transform: translateY(-6px);
      }
    }
    
    @keyframes hover-shadow {
      0% {
        transform: translateY(6px);
        opacity: .4;
      }
    
      50% {
        transform: translateY(3px);
        opacity: 1;
      }

      100% {
        transform: translateY(6px);
        opacity: .4;
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

        &:before{
          content: none;
        }

        &:hover, &.active {
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;

            animation: none;
            -webkit-transform: none;
            transform: none;
        }
    `}
`

export const CurrLinkBtn = styled(NavLink)`
  position: relative;
  width: 44px;
  height: 44px;

  display: inline-block;
	transition-property: transform;

  &.active {
    & > svg {
      background: var(--activeColor);
    }
  }
      &:before {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        content: '';
        top: 100%;
        left: 5%;
        height: 10px;
        width: 90%;
        opacity: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 80%);
        transition-property: transform opacity;
      }
    
      &:hover, &.active{
        transform: translateY(-6px);
        animation-name: hover;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        &:before {
          opacity: .4;
          transform: translateY(6px);
          animation-name: hover-shadow;
          animation-duration: 1.5s;
          animation-delay: .3s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      }
    
    @keyframes hover {
      50% {
        transform: translateY(-3px);
      }
    
      100% {
        transform: translateY(-6px);
      }
    }
    
    @keyframes hover-shadow {
      0% {
        transform: translateY(6px);
        opacity: .4;
      }
    
      50% {
        transform: translateY(3px);
        opacity: 1;
      }

      100% {
        transform: translateY(6px);
        opacity: .4;
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
      &:before {
        pointer-events: none;
        position: absolute;
        z-index: -1;
        content: '';
        top: 100%;
        left: 5%;
        height: 10px;
        width: 90%;
        opacity: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 80%);
        transition-property: transform opacity;
      }
    
      &:hover, &.active{
        transform: translateY(-6px);
        animation-name: hover;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        &:before {
          opacity: .4;
          transform: translateY(6px);
          animation-name: hover-shadow;
          animation-duration: 1.5s;
          animation-delay: .3s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      }
    
    @keyframes hover {
      50% {
        transform: translateY(-3px);
      }
    
      100% {
        transform: translateY(-6px);
      }
    }
    
    @keyframes hover-shadow {
      0% {
        transform: translateY(6px);
        opacity: .4;
      }
    
      50% {
        transform: translateY(3px);
        opacity: 1;
      }

      100% {
        transform: translateY(6px);
        opacity: .4;
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
        font-size: 18px;
        
        &:before{
          content: none;
        }

        &:hover, &.active {
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;

            animation: none;
            -webkit-transform: none;
            transform: none;
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
  &:hover {
    color: var(--paleActiveColor);
  }
`

export const NewsBtnText = styled.span`
  ${respondTo.sm`
        margin-left: 10px;
        color: var(--main-text);
    `}
  &:hover {
    color: var(--paleActiveColor);
  }
`
