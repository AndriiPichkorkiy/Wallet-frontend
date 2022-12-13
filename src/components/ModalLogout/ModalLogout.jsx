import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
// import { logOut } from '../../redux/auth/auth-operations'
import {
  ModalCont,
  ModalLogoutButtonNo,
  ModalLogoutButtonYes,
  ModalLogoutText,
  Overlay
} from './ModalLogoutComponents'

import { useLazyLogOutQuery } from '../../services/authApi'
import { onLogOutAction } from '../../redux/auth/authSlice'
import { unsetToken } from '../../redux/auth/tokenSlice'

const portal = document.querySelector('#portal')

const ModalLogout = ({ noExit }) => {
  const dispatch = useDispatch()
  const esc = useCallback(
    e => {
      if (e.code === `Escape`) {
        noExit()
      }
    },
    [noExit]
  )

  useEffect(() => {
    window.addEventListener('keydown', esc)

    return () => {
      window.removeEventListener('keydown', esc)
    }
  }, [esc])

  const onBackClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        noExit()
      }
    },
    [noExit]
  )
  

  const [logOut] = useLazyLogOutQuery()

  const onHandleLogOut = async () => {
    await logOut().unwrap()
    // if (isError) {
    //   console.log('error', error.data)
    //   return
    // }
    dispatch(onLogOutAction())
    dispatch(unsetToken())
  }

  return createPortal(
    <Overlay onClick={onBackClick}>
      <ModalCont className={'modalLogout'}>
        <ModalLogoutText className={'modalLogoutText'}>
          Are you sure that you want to log out?
        </ModalLogoutText>
        <div>
          <ModalLogoutButtonYes onClick={() => onHandleLogOut()}>
            YES
          </ModalLogoutButtonYes>
          <ModalLogoutButtonNo onClick={noExit}>NO</ModalLogoutButtonNo>
        </div>
      </ModalCont>
    </Overlay>,
    portal
  )
}

export default ModalLogout
