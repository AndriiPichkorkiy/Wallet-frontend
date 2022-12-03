import React from 'react'
import wallet from '../../assets/images/icons/wallet30x30.svg'
import logout from '../../assets/images/icons/logout.svg'
import { HeaderC, LogoCont, Logo, LogoText, BtnLogout, LogoutCont, LogoutExitName, LogoutExitIcon, LogoutExit } from './HeaderComponents'
export const HeaderContent = ({toExit}) => {
  return (
      <>
        <HeaderC >
          <LogoCont >
            <Logo src={wallet} alt="logo"/>
            <LogoText>Wallet</LogoText>
          </LogoCont>
          <LogoutCont>
            <LogoutExitName className={"name"}>Name</LogoutExitName>
            <BtnLogout onClick={toExit} type='btn'>
              <LogoutExitIcon src={logout} alt="logout" />
              <LogoutExit >Exit</LogoutExit>
            </BtnLogout>
          </LogoutCont>
        </HeaderC>
      </>
  )
}

