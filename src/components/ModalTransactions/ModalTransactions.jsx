import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
// import { logOut } from '../../redux/auth/auth-operations'
import { Overlay, ModalBox } from './ModalTransactions.styled'

import { useLazyLogOutQuery } from '../../services/authApi'
import { onLogOutAction } from '../../redux/auth/authSlice'
import { unsetToken } from '../../redux/auth/tokenSlice'

const portal = document.querySelector('#portal')

const ModalTransactions = ({ closeModal }) => {
  // const dispatch = useDispatch()
  // const esc = useCallback(
  //   e => {
  //     if (e.code === `Escape`) {
  //       noExit()
  //     }
  //   },
  //   [noExit]
  // )

  // useEffect(() => {
  //   window.addEventListener('keydown', esc)

  //   return () => {
  //     window.removeEventListener('keydown', esc)
  //   }
  // }, [esc])

  // const onBackClick = useCallback(
  //   e => {
  //     if (e.currentTarget === e.target) {
  //       noExit()
  //     }
  //   },
  //   [noExit]
  // )

  return createPortal(
    <Overlay>
      {/* <Overlay onClick={onBackClick}> */}
      <ModalBox className={'modalLogout'}>
        <div>Transactions</div>
      </ModalBox>
    </Overlay>,
    portal
  )
}

export default ModalTransactions
