import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { respondTo } from '../../../helpers/respondTo'

export const HeaderC = styled.header`
  position: fixed;
  z-index: 50;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  ${respondTo.sm`
        padding: 20px 32px;
    `}
  ${respondTo.lg`
        padding: 20px 20px;
    `}
`

export const LogoCont = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainText};

  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0f0f8a93;

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`

export const Logo = styled.img`
  margin-right: 15px;
  width: 30px;
  ${respondTo.sm`
        width: 40px;
        margin-right: 20px;
    `}
`

export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 700;
  ${respondTo.sm`
        font-size: 36px;
    `}
`

export const LogoutCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.textHeader};
`

export const BtnLogout = styled.button`
  padding: 0;
  font-family: 'Circe';
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    & > svg,
    & > span {
      color: ${({ theme }) => theme.colors.activeColor};
    }
  }
  ${respondTo.sm`
        border-left: 1px ${({ theme }) => theme.colors.textHeader} solid;
        padding-left: 12px;
        
    `}
`

export const LogoutExitName = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.textHeader};
  margin-left: 5px;
`

export const LogoutExitNameCircle = styled.div`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.paleActiveColor};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
`

export const LogoutExit = styled.span`
  position: absolute;
  color: transparent;
  ${respondTo.sm`
        color: ${({ theme }) => theme.colors.textHeader};
        padding-top: 3px;
        margin-left: 8px;
        position: relative;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;  
    `}
`
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  gap: 12px;
  & img {
    width: 45px;
    height: 45px;
    background: url(.png);
    border-radius: 3px;
  }
`
