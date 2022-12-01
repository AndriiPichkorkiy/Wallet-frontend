import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

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
        <div className={"modalLogoutOverlay"}
            onClick={onBackClick}
        >
            <div className={"modalLogout"}>
                <p className="modalLogoutText">Are you sure that you want to log out?</p>
                <div className="modalLogoutButtons">
                    <button className="modalLogoutButtonYes modalLogoutButton">YES</button>
                    <button onClick={toExit} className="modalLogoutButtonNo modalLogoutButton">NO</button>
                </div>
            </div>
        </div>, portal   
    );
}


export default ModalLogout