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
  LogoutExit
} from './HeaderComponents'
import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const HeaderContent = ({ toExit }) => {
  // const name = useSelector(store => store.user.user.name)
  const email = useSelector(store => store.user.user.email)
  const name = email.split("@")[0]
  console.log(name)
  return (
    <>
      <HeaderC>
        <LogoCont>
          {/* <NavLink to="/"> */}
            <Logo src={wallet} alt='logo' />
            <LogoText>Wallet</LogoText>
          {/* </NavLink> */}
        </LogoCont>
        <LogoutCont>
          <LogoutExitName className={'name'}>{name}</LogoutExitName>
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
