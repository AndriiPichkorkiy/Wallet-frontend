import React from 'react'
import wallet from '../../assets/images/icons/wallet30x30.svg'
import { HeaderC, LogoCont, Logo, LogoText, BtnLogout, LogoutCont, LogoutExitName, LogoutExit } from './HeaderComponents'
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';

export const HeaderContent = ({ toExit }) => {
  const name = useSelector(store => store.user.name)

  return (
      <>
        <HeaderC >
          <LogoCont >
            <Logo src={wallet} alt="logo"/>
            <LogoText>Wallet</LogoText>
          </LogoCont>
          <LogoutCont>
            <LogoutExitName className={"name"}>{name}</LogoutExitName>
            <BtnLogout onClick={toExit} type='btn'>
              <LogoutIcon sx={{
                  color: "#BDBDBD"
                }}
                // src={logout} alt="logout"
              />
              <LogoutExit >Exit</LogoutExit>
            </BtnLogout>
          </LogoutCont>
        </HeaderC>
      </>
  )
}

