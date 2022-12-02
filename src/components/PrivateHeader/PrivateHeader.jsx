import React, {useState} from 'react'
import { Header } from '.././Header/Header'
import ModalLogout from '.././ModalLogout/ModalLogout.jsx'

const PrivateHeader = () => {
    const [exit, setExit] = useState(false)
    const a = 1
    if (a === 1) {
        return <>
            <Header toExit={() => setExit(!exit)} />
            {exit && <ModalLogout toExit={() => setExit(!exit)} />}
        </>
    }
}

export default PrivateHeader