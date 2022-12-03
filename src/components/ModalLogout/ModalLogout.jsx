import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalCont, ModalLogoutButtonNo, ModalLogoutButtonYes, ModalLogoutText, Overlay, } from "./ModalLogoutComponents";

const portal = document.querySelector('#portal')

const ModalLogout = ({ toExit}) => {
    
    const esc = useCallback(
      (e) => {
          if (e.code === `Escape`) {
              toExit()
          }
      },
      [toExit],
    )

    useEffect(() => {
        window.addEventListener("keydown", esc)
    
        return () => {
            window.removeEventListener("keydown", esc)
      }
    }, [esc])
    
    
    const onBackClick = e => {
        if (e.currentTarget === e.target) {
            toExit()
        }
    }

    return createPortal(
        <Overlay onClick={onBackClick}>
            <ModalCont className={"modalLogout"}>
                <ModalLogoutText className="modalLogoutText">Are you sure that you want to log out?</ModalLogoutText>
                <div>
                    <ModalLogoutButtonYes>YES</ModalLogoutButtonYes>
                    <ModalLogoutButtonNo onClick={toExit}>NO</ModalLogoutButtonNo>
                </div>
            </ModalCont>
        </Overlay>, portal   
    );
}


export default ModalLogout