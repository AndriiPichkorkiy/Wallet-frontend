import React from 'react'
import wallet from '../../assets/images/icons/wallet30x30.svg'
import logout from '../../assets/images/icons/logout.svg'

export const Header = ({toExit}) => {
  return (
      <>
        <header className={"Header"}>
          <div className={"logo"}>
            <img src={wallet} className={"logoIcon"} alt="logo"/>
            <h2 className={"logoText"}>Wallet</h2>
          </div>
          <div className={"btnlogoutName"}>
            <h3 className={"name"}>Name</h3>
            <button onClick={toExit} className={"btnLogout"} type='btn'><img src={logout} className={"icon"} alt="logout" /><span className='logoutBtn_text'>Exit</span></button>
          </div>
        </header>
      </>
  )
}

