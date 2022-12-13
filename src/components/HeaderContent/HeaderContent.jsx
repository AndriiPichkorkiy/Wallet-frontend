import React from 'react'
import wallet from '../../assets/images/icons/wallet30x30.svg'
import {
  HeaderC,
  LogoCont,
  Logo,
  LogoText,
  BtnLogout,
  LogoutCont,
  LogoutExitName,
  LogoutExit,
  // LogoutExitNameCircle
} from './HeaderComponents'
import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'

export const HeaderContent = ({ toExit }) => {
  const nameAll = useSelector(store => store.user.user.name)
  // const name = nameAll.split('')[0].toUpperCase()
  return (
    <>
      <HeaderC>
        <LogoCont to="/">
          {/* <NavLink */}
            <Logo src={wallet} alt='logo' />
            <LogoText>Wallet</LogoText>
          {/* </NavLink> */}
        </LogoCont>
        <LogoutCont>
          {/* <LogoutExitNameCircle className={'name'}>
            {name}
          </LogoutExitNameCircle> */}
          <LogoutExitName>
            {nameAll}
          </LogoutExitName>
          <BtnLogout onClick={toExit} type='btn'>
            <LogoutIcon
              sx={{
                color: '#BDBDBD'
              }}
            // src={logout} alt="logout"
            />
            <LogoutExit>Exit</LogoutExit>
          </BtnLogout>
        </LogoutCont>
      </HeaderC>
    </>
  )
}
